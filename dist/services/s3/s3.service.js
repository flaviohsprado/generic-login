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
exports.S3Service = void 0;
const aws_sdk_1 = require("aws-sdk");
const common_1 = require("@nestjs/common");
const s3_config_1 = require("./s3.config");
const file_dto_1 = require("../../modules/file/dto/file.dto");
let S3Service = class S3Service {
    constructor() {
        this.bucketName = s3_config_1.s3Config.bucketName;
        this.client = new aws_sdk_1.S3({
            region: s3_config_1.s3Config.defaultRegion,
            accessKeyId: s3_config_1.s3Config.accessKeyId,
            secretAccessKey: s3_config_1.s3Config.secretAccessKey,
        });
    }
    async upload(files, ownerId, ownerType) {
        try {
            if (Array.isArray(files)) {
                const paths = await Promise.all(files.map(async (file) => {
                    const newFile = await new file_dto_1.FileDTO(Object.assign(Object.assign({}, file), { ownerId,
                        ownerType })).generateFileKey();
                    return await this.uploadFile(newFile);
                }));
                return paths;
            }
            const path = await this.uploadFile(files);
            return path;
        }
        catch (_a) {
            return undefined;
        }
    }
    async uploadFile(file) {
        const fileUploaded = await this.client
            .upload({
            Bucket: this.bucketName,
            Key: file.key,
            ContentType: file.mimetype,
            Body: file.buffer,
            ACL: s3_config_1.s3Config.defaultFilesACL,
        })
            .promise();
        file.url = fileUploaded.Location;
        file.key = fileUploaded.Key;
        return file;
    }
    async delete(keys) {
        await this.client
            .deleteObjects({
            Bucket: this.bucketName,
            Delete: {
                Objects: keys.map((key) => ({ Key: key })),
            },
        })
            .promise();
    }
};
S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
exports.S3Service = S3Service;
//# sourceMappingURL=s3.service.js.map