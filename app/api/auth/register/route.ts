import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";
import { z } from "zod";
import { hash } from 'bcrypt';
import { PrismaClient } from "@prisma/client";
import { CredentialModel } from "../../../validation/CredentialModel";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const validation = CredentialModel.parse({ email, password });
        if (validation) {

            const hashedPassword = await hash(password, 10);

            // console.log({ email, password });

            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                }
            });
            return new NextResponse(JSON.stringify(user), { status: 200 });
        }


    } catch (error) {
        if (error instanceof z.ZodError) {
            // console.log(error.issues);
            return new NextResponse(JSON.stringify(error.issues), { status: 400 });
        }
    }
}