"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const sharp = require("sharp");
let SupabaseService = class SupabaseService {
    configService;
    client;
    constructor(configService) {
        this.configService = configService;
        const region = this.configService.get('SUPABASE_REGION');
        const endpoint = this.configService.get('SUPABASE_ENDPOINT');
        const accessKeyId = this.configService.get('SUPABASE_ACCESS_KEY_ID');
        const secretAccessKey = this.configService.get('SUPABASE_SECRET_ACCESS_KEY');
        if (!region || !endpoint || !accessKeyId || !secretAccessKey) {
            throw new Error('Missing Supabase S3 config');
        }
        this.client = new client_s3_1.S3Client({
            region,
            endpoint,
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
            forcePathStyle: true,
        });
    }
    async processAndUploadImage(fileBuffer, bucket, fileName, quality = 50, width, height, format = 'webp') {
        let image = sharp(fileBuffer);
        if (width || height) {
            image = image.resize(width, height, {
                fit: 'inside',
            });
        }
        let buffer;
        let contentType;
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
        const command = new client_s3_1.PutObjectCommand({
            Bucket: bucket,
            Key: fileName,
            Body: buffer,
            ContentType: contentType,
        });
        await this.client.send(command);
        const supabaseUrl = this.configService.get('SUPABASE_URL');
        return `${supabaseUrl}/storage/v1/object/public/${bucket}/${fileName}`;
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map