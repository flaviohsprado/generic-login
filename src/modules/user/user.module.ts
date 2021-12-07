import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import { DatabaseModule } from '../database/database.module';
import { FileModule } from '../file/file.module';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [DatabaseModule, FileModule, CompanyModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [...userProviders, UserService],
})
export class UserModule {}
