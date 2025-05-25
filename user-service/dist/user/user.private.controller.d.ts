import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserPrivateController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    create(dto: CreateUserDto): Promise<{
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
        role: import("generated/prisma").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: string;
        name: string | null;
        email: string;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__UserClient<{
        id: string;
        name: string | null;
        email: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateUserDto): Promise<{
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
    remove(id: string): import("generated/prisma").Prisma.Prisma__UserClient<{
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
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
