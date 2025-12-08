import auth from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session) {
      return NextResponse.json(
        { message: "خطا در احزار هویت" },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const orderId = params.id;

    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return NextResponse.json({ message: "سفارش یافت نشد" }, { status: 404 });
    }
    // for sec checking order belongs to user
    if (order.userId !== userId) {
      return NextResponse.json(
        { message: "شما اجازه لغو این سفارش ندارید." },
        { status: 403 }
      );
    }

    if (["SHIPPED", "DELIVERED", "CANCELLED"].includes(order.status)) {
      return NextResponse.json(
        { message: "این سفارش قابل لغو نیست" },
        { status: 400 }
      );
    }

    //if all checks passed, we can canecel the order
    const cancelledOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status: "CANCELLED" },
    });

    return NextResponse.json(cancelledOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "خطا در سرور" }, { status: 500 });
  }
}
