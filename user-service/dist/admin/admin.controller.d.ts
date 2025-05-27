import { ManagerService } from '../manager/manager.service';
import { CreateManagerDto } from '../manager/dto/create-manager.dto';
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly managerService;
    private readonly adminService;
    constructor(managerService: ManagerService, adminService: AdminService);
    getAllManagers(): Promise<({
        profile: {
            id: string;
            userId: string;
            bio: string | null;
            birthday: Date | null;
            gender: string | null;
            location: string | null;
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
    })[]>;
    getManagerById(id: string): Promise<({
        profile: {
            id: string;
            userId: string;
            bio: string | null;
            birthday: Date | null;
            gender: string | null;
            location: string | null;
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
    }) | null>;
    createManager(dto: CreateManagerDto, req: any): Promise<{
        profile: {
            id: string;
            userId: string;
            bio: string | null;
            birthday: Date | null;
            gender: string | null;
            location: string | null;
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
}
