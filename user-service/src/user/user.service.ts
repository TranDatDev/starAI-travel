import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { nanoid } from 'nanoid';
import * as bcrypt from 'bcrypt';
import { BadRequestException, HttpException } from '@nestjs/common/exceptions';
import { PartnerStatus } from '../../generated/prisma';
import { SupabaseService } from '../supabase/supabase.service';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const id = nanoid(8);
    const profileId = nanoid(8);
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.prisma.user.create({
      data: {
        id,
        email: createUserDto.email,
        password: hashedPassword,
        profile: {
          create: {
            id: profileId,
            bio: '',
            birthday: null,
            gender: '',
            location: '',
          },
        },
      },
      include: {
        profile: true,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  getUserInfoById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
        phoneNumber: true,
        avatar: true,
        language: true,
        theme: true,
        profile: true,
      },
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    let data: any = { ...dto };
    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        theme: true,
        language: true,
      },
    });
  }

  async getAllRequestPartnerFromUserByManager(status: string) {
    return this.prisma.partnerInfo.findMany({
      where: { status: status as PartnerStatus },
      select: {
        id: true,
        userId: true,
        organization: true,
        licenseNumber: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async getSpecificRequestPartnerFromUserByManager(userId: string) {
    return this.prisma.partnerInfo.findMany({
      where: { userId },
      select: {
        id: true,
        userId: true,
        organization: true,
        licenseNumber: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async requestPartnerRole(
    userId: string,
    organization: string,
    licenseNumber: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { partnerInfo: true },
    });

    if (!user) throw new Error('User not found');
    if (user.role !== 'USER')
      throw new HttpException(
        'Only regular users can request partner role',
        403,
      );
    if (user.partnerInfo)
      throw new BadRequestException('You have already requested partner role');

    await this.prisma.partnerInfo.create({
      data: {
        id: nanoid(8),
        userId,
        organization,
        licenseNumber,
        status: 'PENDING',
      },
    });

    return { message: 'Partner request submitted' };
  }

  async updateAvatar(
    userId: string,
    file: Express.Multer.File,
  ): Promise<{ avatarUrl: string }> {
    const fileName = `user-${userId}-${Date.now()}-avatar.webp`;
    const bucket = 'user-files';

    const avatarUrl = await this.supabaseService.processAndUploadImage(
      file.buffer,
      bucket,
      fileName,
      70,
      300,
      300,
      'webp',
    );

    await this.prisma.user.update({
      where: { id: userId },
      data: { avatar: avatarUrl },
    });

    return { avatarUrl };
  }

  async getUserAvatarById(id: string): Promise<string | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { avatar: true },
    });

    return user?.avatar || null;
  }

  async updateTheme(id: string, theme: string) {
    return this.prisma.user.update({
      where: { id },
      data: { theme },
      select: { theme: true },
    });
  }

  async updateLanguage(id: string, language: string) {
    return this.prisma.user.update({
      where: { id },
      data: { language },
      select: { language: true },
    });
  }
}
