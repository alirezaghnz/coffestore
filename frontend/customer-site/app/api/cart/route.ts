import auth from "@/app/lib/auth";

import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const headers = Object.fromEntries(req.headers.entries());
    const session = await auth.api.getSession({ headers });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const { cartItems } = await req.json();

    for (const item of cartItems) {
      await prisma.cartItem.upsert({
        where: {
          userId_coffeeId: {
            userId,
            coffeeId: item.id,
          },
        },
        update: {
          quantity: { increment: item.quantity },
        },
        create: {
          userId,
          coffeeId: item.id,
          quantity: item.quantity,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "خطا در ذخیره سبد خرید" },
      { status: 500 }
    );
  }
}
