import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { nanoid } from 'nanoid';
import { SupabaseService } from '../supabase/supabase.service';
@Injectable()
export class PartnerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async uploadPost(
    userId: string,
    file: Express.Multer.File,
    body: {
      title: string;
      content: string;
      isPublic?: boolean;
    },
  ): Promise<{ postId: string; imageUrl?: string }> {
    const { title, content, isPublic = true } = body;
    const fileName = `post-${userId}-${Date.now()}-image.jpg`;
    const bucket = 'post-files';
    const imageUrl = await this.supabaseService.processAndUploadImage(
      file.buffer,
      bucket,
      fileName,
      90,
      1920,
      1080,
      'jpeg',
    );
    const postId = nanoid(8);
    await this.prisma.post.create({
      data: {
        id: postId,
        userId,
        title,
        content,
        imageUrl,
        isPublic,
      },
    });

    return {
      postId: postId,
      imageUrl,
    };
  }

  async getAllPosts(): Promise<any[]> {
    return this.prisma.post.findMany({
      where: { isPublic: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getPostsByPartnerId(userId: string): Promise<any[]> {
    return this.prisma.post.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async disablePost(postId: string): Promise<{ message: string }> {
    const post = await this.prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    await this.prisma.post.update({
      where: { id: postId },
      data: { isPublic: false },
    });

    return { message: 'Post disabled successfully' };
  }
}
