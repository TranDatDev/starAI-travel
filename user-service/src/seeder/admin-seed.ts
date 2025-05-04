import { PrismaClient } from '../../generated/prisma';
import * as bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
const prisma = new PrismaClient();

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
      id: nanoid(8),
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
