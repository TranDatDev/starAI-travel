import { PartnerService } from './partner.service';
export declare class PartnerPublicController {
    private readonly partnerService;
    constructor(partnerService: PartnerService);
    uploadPost(id: string, file: Express.Multer.File, body: {
        title: string;
        content: string;
        isPublic?: boolean;
    }, req: any): Promise<{
        postId: string;
        imageUrl?: string;
    }>;
    getAllPosts(): Promise<any[]>;
    getPostsByPartnerId(id: string): Promise<any[]>;
    disablePost(postId: string): Promise<{
        message: string;
    }>;
}
