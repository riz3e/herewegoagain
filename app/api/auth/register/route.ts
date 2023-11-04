import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";
import { z } from "zod";

const CredentialModel = z.object({
    email: z.string().email('Email should be valid'),
    password: z.string().min(8, 'Password should be at least 8 symbols').max(100),
});

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const validation = CredentialModel.parse({ email, password });
        if (validation) {
            console.log({ email, password });
            return new NextResponse('OK', { status: 200 });
        }


    } catch (error) {
        if (error instanceof z.ZodError) {
            console.log(error.issues);
            return new NextResponse(JSON.stringify(error.issues), { status: 400 });
        }
        console.error({ error });
    }
}