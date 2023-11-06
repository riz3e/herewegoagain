import { z } from "zod";

export const CredentialModel = z.object({
    email: z.string().email('Email should be valid'),
    password: z.string().min(8, 'Password should be at least 8 symbols').max(100),
});

export type CredentialModel = z.infer<typeof CredentialModel>;