import { EnumRole } from ".prisma/client";

export interface CreateUserModel {
    name: string;
    whatsapp_number: string;
    address: string;
    role: EnumRole;
    email?: string;
    password?: string;
}

export interface UpdateUserModel {
    name?: string;
    whatsapp_number?: string;
    address?: string;
    role?: string;
    email?: string;
    password?: string;
}