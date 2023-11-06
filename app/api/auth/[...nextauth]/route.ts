import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = NextAuth({
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours

    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials: any) {
                try{
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                // console.log(user);
                if (!user) {
                    throw new Error("No user found");
                }

                const PasswordCheck = await compare(credentials?.password || "", user.password)
                if (!PasswordCheck) {
                    throw new Error("Password is incorrect");
                }

                
                return {
                    id: user.id,
                    email: user.email,
                }}
                catch (error) {
                    console.log(error);
                    throw new Error(JSON.stringify(error));
                }
            }
        })
    ],
})

export { handler as GET, handler as POST };