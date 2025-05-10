import { UserService } from './user.service';
import { UpdateUserPublicDto } from './dto/update-user.public.dto';
import { RequestPartnerDto } from './dto/request-partner.dto';
export declare class UserPublicController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    getUserInfoById(id: string): import("generated/prisma").Prisma.Prisma__UserClient<{
        name: string | null;
        email: string;
        phoneNumber: string | null;
        avatar: string | null;
        language: string | null;
        theme: string | null;
        profile: {
            id: string;
            userId: string;
            bio: string | null;
            birthday: Date | null;
            gender: string | null;
            location: string | null;
        } | null;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateUserPublicDto): Promise<{
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
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    uploadAvatar(id: string, file: Express.Multer.File): Promise<{
        avatarUrl: {
            avatarUrl: string;
        };
    }>;
    requestPartner(userId: string, dto: RequestPartnerDto): Promise<{
        message: string;
    }>;
}
