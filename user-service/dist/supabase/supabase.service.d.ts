import { ConfigService } from '@nestjs/config';
export declare class SupabaseService {
    private readonly configService;
    private client;
    constructor(configService: ConfigService);
    processAndUploadImage(fileBuffer: Buffer, bucket: string, fileName: string, quality?: number, width?: number, height?: number, format?: 'webp' | 'jpeg' | 'png'): Promise<string>;
}
