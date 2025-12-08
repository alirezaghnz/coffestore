import prisma from "@/app/lib/prisma";
import auth from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });

    if (!session?.user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    //for delete address in db with id
    await prisma.Address.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Address deleted" });
  } catch (e) {
    console.error("DELETE ERROR:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
