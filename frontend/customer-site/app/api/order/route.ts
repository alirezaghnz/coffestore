import auth from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    const userId = session?.user?.id;

    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { cartItems, addressId } = body;

    if (!cartItems?.length)
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });

   
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );
    const orderNumber = "ORDR-" + Math.floor(100000 + Math.random() * 900000);

    const order = await prisma.order.create({
      data: {
        userId,
        addressId,
        orderNumber,
        totalAmout: String(totalAmount),
        orderItems: {
          create: cartItems.map((item) => ({
            coffeeId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, orderId: order.id, orderNumber });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
