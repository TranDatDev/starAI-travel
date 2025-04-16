import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as sharp from 'sharp';

@Injectable()
export class SupabaseService {
  private client: S3Client;

  constructor() {
    const region = process.env.SUPABASE_REGION;
    const endpoint = process.env.SUPABASE_ENDPOINT;
    const accessKeyId = process.env.SUPABASE_ACCESS_KEY_ID;
    const secretAccessKey = process.env.SUPABASE_SECRET_ACCESS_KEY;

    if (!region || !endpoint || !accessKeyId || !secretAccessKey) {
      throw new Error('Missing Supabase S3 config');
    }

    this.client = new S3Client({
      region,
      endpoint,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
      forcePathStyle: true,
    });
  }

  async processAndUploadImage(
    fileBuffer: Buffer,
    bucket: string,
    fileName: string,
  ): Promise<string> {
    // Chuyển đổi ảnh sang định dạng webp với chất lượng 50
    const webpBuffer = await sharp(fileBuffer).webp({ quality: 50 }).toBuffer();

    // Lệnh upload lên S3
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: fileName,
      Body: webpBuffer,
      ContentType: 'image/webp',
    });

    await this.client.send(command);

    // Trả về URL chính xác cho ảnh đã upload lên Supabase
    return `${process.env.SUPABASE_URL}/storage/v1/object/public/${bucket}/${fileName}`;
  }
}
