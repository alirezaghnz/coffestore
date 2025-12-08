import auth from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  // Fetch user with default address
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      addresses: {
        where: { isDefault: true },
        take: 1,
      },
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Return user info along with default address
  return NextResponse.json({
    name: user.name,
    phone: user.phone,
    email: user.email,
    address: user.addresses[0]?.address || "",
    province: user.addresses[0]?.province || "",
    postalCode: user.addresses[0]?.postalCode || "",
  });
}

export async function PUT(req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const data = await req.json();

    await prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        phone: data.phone,
      },
    });

    const existingAddress = await prisma.address.findFirst({
      where: { userId, isDefault: true },
    });

    if (existingAddress) {
      await prisma.address.update({
        where: { id: existingAddress.id },
        data: {
          fullName: data.name,
          phone: data.phone,
          province: data.province,
          address: data.address,
          postalCode: data.postalCode,
        },
      });
    } else {
      await prisma.address.create({
        data: {
          userId,
          fullName: data.name,
          phone: data.phone,
          province: data.province,
          address: data.address,
          postalCode: data.postalCode,
          isDefault: true,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
