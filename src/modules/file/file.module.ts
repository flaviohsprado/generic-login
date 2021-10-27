import { Global, Module } from '@nestjs/common';
//import { UserController } from './user.controller';
import { FileService } from './file.service';
import { fileProviders } from './file.provider';
import { DatabaseModule } from 'src/services/database/database.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [DatabaseModule],
  providers: [...fileProviders, FileService],
  exports: [FileService],
})
export class FileModule {}
