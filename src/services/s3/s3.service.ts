import { S3 } from 'aws-sdk';
import { Injectable, Req, Res } from '@nestjs/common';
import {
  IFileUploader,
  IFile,
  IUploadedFile,
} from 'src/interfaces/file.interface';
import { s3Config } from './s3.config';
import { FileDTO } from 'src/modules/file/dto/file.dto';

@Injectable()
export class S3Service {
  private client: S3;

  private readonly bucketName = s3Config.bucketName;

  constructor() {
    this.client = new S3({
      region: s3Config.defaultRegion,
      accessKeyId: s3Config.accessKeyId,
      secretAccessKey: s3Config.secretAccessKey,
    });
  }

  async upload(
    files: FileDTO | FileDTO[],
    ownerId: string,
    ownerType: string,
  ): Promise<FileDTO | FileDTO[] | undefined> {
    try {
      if (Array.isArray(files)) {
        const paths = await Promise.all(
          files.map(async (file: Omit<FileDTO, 'id'>) => {
            const newFile = await new FileDTO({
              ...file,
              ownerId,
              ownerType,
            }).generateFileKey();

            return await this.uploadFile(newFile);
          }),
        );

        return paths;
      }

      const path = await this.uploadFile(files);

      return path;
    } catch {
      return undefined;
    }
  }

  private async uploadFile(file: FileDTO): Promise<FileDTO> {
    const fileUploaded = await this.client
      .upload({
        Bucket: this.bucketName,
        Key: file.key,
        ContentType: file.mimetype,
        Body: file.buffer,
        ACL: s3Config.defaultFilesACL,
      })
      .promise();

    file.url = fileUploaded.Location;
    file.key = fileUploaded.Key;

    return file;
  }

  public async delete(keys: string[]): Promise<void> {
    await this.client
      .deleteObjects({
        Bucket: this.bucketName,
        Delete: {
          Objects: keys.map((key) => ({ Key: key })),
        },
      })
      .promise();
  }

  public generateFileKey(file: any, timestamp: number): string {
    return `${file.name}-${timestamp}.${file.extension}`;
  }
}
