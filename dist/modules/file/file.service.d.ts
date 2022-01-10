import { Repository } from 'typeorm';
import { FileDTO } from './dto/file.dto';
import { IFile } from './interfaces/file.interface';
export declare class FileService {
    private fileRepository;
    constructor(fileRepository: Repository<IFile>);
    findByKey(key: string, value: string): Promise<IFile>;
    create(files: FileDTO[]): Promise<void>;
    destroy(files: IFile[]): Promise<void>;
}
