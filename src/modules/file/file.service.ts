import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from './dto/file.dto';
import { IFile } from './interfaces/file.interface';

@Injectable()
export class FileService {
  constructor(
    @Inject('FILE_REPOSITORY')
    private fileRepository: Repository<IFile>,
  ) {}

  async findByKey(key: string, value: string): Promise<IFile> {
    return await this.fileRepository.findOne({
      where: { [key]: value },
    });
  }

  async create(files: FileDTO[]): Promise<void> {
    for (const file of files) {
      await this.fileRepository.save(file);
    }
  }

  async destroy(files: IFile[]): Promise<void> {
    for (const file of files) {
      await this.fileRepository.delete({
        key: file.key,
      });
    }
  }
}
