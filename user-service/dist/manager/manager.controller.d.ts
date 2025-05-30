import { ManagerService } from './manager.service';
import { UserService } from 'src/user/user.service';
export declare class ManagerController {
    private readonly managerService;
    private readonly userService;
    constructor(managerService: ManagerService, userService: UserService);
    getAllRequestPartnerFromUserByManager(status: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        licenseNumber: string | null;
        status: import("../../generated/prisma").$Enums.PartnerStatus;
    }[]>;
    getSpecificRequestPartnerFromUserByManager(userId: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        licenseNumber: string | null;
        status: import("../../generated/prisma").$Enums.PartnerStatus;
    }[]>;
    verifyPartnerRequest(partnerUserId: string, body: {
        approved: boolean;
        reason?: string;
    }, req: any): Promise<{
        message: string;
    }>;
    getAllUserByManager(page: number | undefined, limit: number | undefined, req: any): Promise<{
        data: {
            name: string | null;
            email: string;
            id: string;
            role: import("../../generated/prisma").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
}
