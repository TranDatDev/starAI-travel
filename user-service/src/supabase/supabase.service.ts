import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as sharp from 'sharp';

@Injectable()
export class SupabaseService {
  private client: S3Client;

  constructor(private readonly configService: ConfigService) {
    const region = this.configService.get<string>('SUPABASE_REGION');
    const endpoint = this.configService.get<string>('SUPABASE_ENDPOINT');
    const accessKeyId = this.configService.get<string>(
      'SUPABASE_ACCESS_KEY_ID',
    );
    const secretAccessKey = this.configService.get<string>(
      'SUPABASE_SECRET_ACCESS_KEY',
    );

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
    quality: number = 50,
    width?: number,
    height?: number,
    format: 'webp' | 'jpeg' | 'png' = 'webp',
  ): Promise<string> {
    let image = sharp(fileBuffer);

    if (width || height) {
      image = image.resize(width, height, {
        fit: 'inside',
      });
    }

    let buffer: Buffer;
    let contentType: string;

    switch (format) {
      case 'jpeg':
        buffer = await image.jpeg({ quality }).toBuffer();
        contentType = 'image/jpeg';
        break;
      case 'png':
        buffer = await image.png({ quality }).toBuffer();
        contentType = 'image/png';
        break;
      default:
        buffer = await image.webp({ quality }).toBuffer();
        contentType = 'image/webp';
        break;
    }

    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: fileName,
      Body: buffer,
      ContentType: contentType,
    });

    await this.client.send(command);

    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    return `${supabaseUrl}/storage/v1/object/public/${bucket}/${fileName}`;
  }
}
