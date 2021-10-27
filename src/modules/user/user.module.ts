import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import { DatabaseModule } from 'src/services/database/database.module';
import { FileModule } from '../file/file.module';
import { FileService } from '../file/file.service';
@Module({
  imports: [DatabaseModule, FileModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [...userProviders, UserService],
})
export class UserModule {}
