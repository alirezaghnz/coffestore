import auth from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const session = await auth.api.getSession({ headers: req.headers });
  const userId = session?.user?.id;

  if (!userId)
    return NextResponse.json({ error: "خطا در احزار هویت" }, { status: 401 });

  const order = await prisma.order.findUnique({
    where: { id: params.id, userId },
    include: {
      orderItems: {
        include: { coffee: true },
      },
      address: true,
    },
  });

  return NextResponse.json(order);
}
