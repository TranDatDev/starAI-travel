"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const bcrypt = require("bcrypt");
const nanoid_1 = require("nanoid");
const prisma = new prisma_1.PrismaClient();
async function main() {
    const email = 'admin@example.com';
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        console.log('Admin user already exists');
        return;
    }
    const admin = await prisma.user.create({
        data: {
            id: (0, nanoid_1.nanoid)(8),
            email,
            password: hashedPassword,
            name: 'Super Admin',
            role: 'ADMIN',
        },
    });
    console.log('✅ Admin user created:', admin.email);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=admin-seed.js.map