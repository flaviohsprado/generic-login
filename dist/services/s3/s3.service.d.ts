import { FileDTO } from 'src/modules/file/dto/file.dto';
export declare class S3Service {
    private client;
    private readonly bucketName;
    constructor();
    upload(files: FileDTO | FileDTO[], ownerId: string, ownerType: string): Promise<FileDTO | FileDTO[] | undefined>;
    private uploadFile;
    delete(keys: string[]): Promise<void>;
}
