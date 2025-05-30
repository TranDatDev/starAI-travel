import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SupabaseService } from '../supabase/supabase.service';
export declare class UserService {
    private readonly prisma;
    private readonly supabaseService;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createUserDto: CreateUserDto): Promise<{
        profile: {
            id: string;
            bio: string | null;
            birthday: Date | null;
            gender: string | null;
            location: string | null;
            userId: string;
        } | null;
    } & {
        name: string | null;
        email: string;
        password: string;
        id: string;
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
    findAll(): import("../../generated/prisma").Prisma.PrismaPromise<{
        name: string | null;
        email: string;
        id: string;
    }[]>;
    findOne(id: string): import("../../generated/prisma").Prisma.Prisma__UserClient<{
        name: string | null;
        email: string;
        id: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("../../generated/prisma").Prisma.PrismaClientOptions>;
    getUserInfoById(id: string): import("../../generated/prisma").Prisma.Prisma__UserClient<{
        profile: {
            id: string;
            bio: string | null;
            birthday: Date | null;
            gender: string | null;
            location: string | null;
            userId: string;
        } | null;
        name: string | null;
        email: string;
        phoneNumber: string | null;
        avatar: string | null;
        language: string | null;
        theme: string | null;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("../../generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateUserDto): Promise<{
        name: string | null;
        email: string;
        password: string;
        id: string;
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
    remove(id: string): import("../../generated/prisma").Prisma.Prisma__UserClient<{
        name: string | null;
        email: string;
        password: string;
        id: string;
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
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("../../generated/prisma").Prisma.PrismaClientOptions>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        id: string;
        language: string | null;
        theme: string | null;
        role: import("../../generated/prisma").$Enums.Role;
    } | null>;
    getAllRequestPartnerFromUserByManager(status: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        licenseNumber: string | null;
        status: import("../../generated/prisma").$Enums.PartnerStatus;
    }[]>;
    getSpecificRequestPartnerFromUserByManager(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        organization: string | null;
        licenseNumber: string | null;
        status: import("../../generated/prisma").$Enums.PartnerStatus;
    }[]>;
    requestPartnerRole(userId: string, organization: string, licenseNumber: string): Promise<{
        message: string;
    }>;
    updateAvatar(userId: string, file: Express.Multer.File): Promise<{
        avatarUrl: string;
    }>;
    getUserAvatarById(id: string): Promise<string | null>;
    updateTheme(id: string, theme: string): Promise<{
        theme: string | null;
    }>;
    updateLanguage(id: string, language: string): Promise<{
        language: string | null;
    }>;
    getAllUserByManager(page: number, limit: number): Promise<{
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
