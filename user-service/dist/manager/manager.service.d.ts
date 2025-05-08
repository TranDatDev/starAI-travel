import { PrismaService } from '../prisma/prisma.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { ManagerAction, TargetType, HttpMethod } from '../../generated/prisma';
export declare class ManagerService {
    private prisma;
    constructor(prisma: PrismaService);
    createManager(dto: CreateManagerDto): Promise<{
        profile: {
            id: string;
            bio: string | null;
            birthday: Date | null;
            gender: string | null;
            location: string | null;
            userId: string;
        } | null;
    } & {
        id: string;
        name: string | null;
        email: string;
        password: string;
        phoneNumber: string | null;
        avatar: string | null;
        language: string | null;
        theme: string | null;
        isBanned: boolean;
        isDeleted: boolean;
        isVerified: boolean;
        role: import("../../generated/prisma").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    logManagerAction(params: {
        managerId: string;
        action: ManagerAction;
        targetId?: string;
        targetType?: TargetType;
        description?: string;
        httpMethod?: HttpMethod;
        httpUrl?: string;
        httpQuery?: any;
        httpParams?: any;
        httpBody?: any;
        httpHeaders?: any;
    }): Promise<{
        id: string;
        managerId: string;
        action: import("../../generated/prisma").$Enums.ManagerAction;
        actionScope: import("generated/prisma/runtime/library").JsonValue | null;
        targetId: string | null;
        targetType: import("../../generated/prisma").$Enums.TargetType | null;
        description: string | null;
        httpMethod: import("../../generated/prisma").$Enums.HttpMethod | null;
        httpUrl: string | null;
        httpQuery: import("generated/prisma/runtime/library").JsonValue | null;
        httpParams: import("generated/prisma/runtime/library").JsonValue | null;
        httpBody: import("generated/prisma/runtime/library").JsonValue | null;
        httpHeaders: import("generated/prisma/runtime/library").JsonValue | null;
        actedAt: Date;
    }>;
    verifyPartnerRequest(params: {
        managerId: string;
        partnerUserId: string;
        approved: boolean;
        reason?: string;
        httpRequest?: {
            method?: HttpMethod;
            url?: string;
            query?: any;
            params?: any;
            body?: any;
            headers?: any;
        };
    }): Promise<{
        message: string;
    }>;
}
