import { FileDTO } from 'src/modules/file/dto/file.dto';
declare class FileUpload {
    private uploadService;
    constructor();
    upload(files: FileDTO[], ownerId: string, ownerType: string): Promise<FileDTO[]>;
    delete(keys: string[]): Promise<void>;
}
declare const _default: FileUpload;
export default _default;
