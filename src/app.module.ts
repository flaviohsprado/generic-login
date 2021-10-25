import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './services/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './services/database/database.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
})
export class AppModule {}
