import { PrismaService } from '../prisma/prisma.service';
import { AdminAction, TargetType } from '../../generated/prisma';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    logAdminAction(params: {
        adminId: string;
        action: AdminAction;
        targetId?: string;
        targetType?: TargetType;
        description?: string;
    }): Promise<{
        description: string | null;
        id: string;
        action: import("../../generated/prisma").$Enums.AdminAction;
        targetId: string | null;
        targetType: import("../../generated/prisma").$Enums.TargetType | null;
        httpMethod: import("../../generated/prisma").$Enums.HttpMethod | null;
        httpUrl: string | null;
        httpQuery: import("generated/prisma/runtime/library").JsonValue | null;
        httpParams: import("generated/prisma/runtime/library").JsonValue | null;
        httpBody: import("generated/prisma/runtime/library").JsonValue | null;
        httpHeaders: import("generated/prisma/runtime/library").JsonValue | null;
        actedAt: Date;
        adminId: string;
    }>;
}
