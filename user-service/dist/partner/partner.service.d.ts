import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
export declare class PartnerService {
    private readonly prisma;
    private readonly supabaseService;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    uploadPost(userId: string, file: Express.Multer.File, body: {
        title: string;
        content: string;
        isPublic?: boolean;
    }): Promise<{
        postId: string;
        imageUrl?: string;
    }>;
    getAllPosts(): Promise<any[]>;
    getPostsByPartnerId(userId: string): Promise<any[]>;
    disablePost(postId: string): Promise<{
        message: string;
    }>;
}
