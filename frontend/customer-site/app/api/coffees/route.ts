import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const coffees = await prisma.coffee.findMany({
      where: { isAvalable: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(coffees);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}
