import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    create(dto: CreateUserDto): Promise<{
        name: string | null;
        email: string;
        password: string;
        id: string;
        role: import("generated/prisma").$Enums.Role;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        name: string | null;
        email: string;
        id: string;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__UserClient<{
        name: string | null;
        email: string;
        id: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateUserDto): Promise<{
        name: string | null;
        email: string;
        password: string;
        id: string;
        role: import("generated/prisma").$Enums.Role;
    }>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__UserClient<{
        name: string | null;
        email: string;
        password: string;
        id: string;
        role: import("generated/prisma").$Enums.Role;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
