import auth from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
 const session = await auth.api.getSession({ headers: req.headers });
  if (!session?.user)
    return NextResponse.json({ message: "خطا در احزار هویت" }, { status: 401 });

  const addresses = await prisma.address.findMany({
    where: { userId: session.user.id },
  });

  return NextResponse.json(addresses, { status: 200 });
}


export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    const userId = session?.user?.id;

    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { id, fullName, phone, province, address, postalCode, isDefault } = body;

    
    if (id) {
      const updated = await prisma.address.update({
        where: { id },
        data: {
          fullName,
          phone,
          province,
          address,
          postalCode,
          isDefault,
        },
      });

      return NextResponse.json(updated);
    }

   
    const newAddress = await prisma.address.create({
      data: {
        userId,
        fullName,
        phone,
        province,
        address,
        postalCode,
        isDefault,
      },
    });

    return NextResponse.json(newAddress);
  } catch (e) {
    console.error("ADDRESS API ERROR", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const session = await auth.api.getSession({ headers: req.headers });
  const userId = session?.user?.id;

  if (!userId)
    return NextResponse.json({ error: "خطا در احزار هویت" }, { status: 401 });

  const { id } = await req.json(); 

  if (!id)
    return NextResponse.json({ error: "Address ID required" }, { status: 400 });

  await prisma.address.updateMany({
    where: { userId },
    data: { isDefault: false },
  });

  
  const updated = await prisma.address.update({
    where: { id },
    data: { isDefault: true },
  });

  return NextResponse.json(updated, { status: 200 });
}

