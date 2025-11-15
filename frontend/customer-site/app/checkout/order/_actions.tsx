"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addUserOrderInfo(data: any) {
  const { cartItems } = data;
  try {
    await prisma.userOrderInfo.create({
      data: {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        province: data.province,
        mobile: data.mobile,
        codemelli: data.codemelli,
        location: data.location,
        pelak: data.pelak,
        orderItems: {
          create: cartItems.map((item: any) => ({
            coffee: { connect: { id: item.id } },
            quantity: item.quantity,
          })),
        },
      },
      include: {
        orderItems: { include: { coffee: true } },
      },
    });

    revalidatePath("/checkout/order");
  } catch (error) {
    console.error("Database error:", error);
  }
  redirect("/checkout/complete");
}
