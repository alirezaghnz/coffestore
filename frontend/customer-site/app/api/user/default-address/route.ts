import auth from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    try{
        const session = await auth.api.getSession({headers:req.headers})
        if(!session){
            return NextResponse.json({message: "خطا در احزار هویت"}, {status:401})
        }
        const userId = session.user.id;

        const address = await prisma.address.findFirst({
            where: {userId, isDefault: true}
        })
        return NextResponse.json(address || null)
    }catch(err){

        console.error(err)
        return NextResponse.json({message: "خطا در سرور"}, { status: 500})
    }
}