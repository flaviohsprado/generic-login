import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './services/database/database.module';
import { FileMiddleware } from './middlewares/file.middleware';
import { FileModule } from './modules/file/file.module';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [DatabaseModule, FileModule, UserModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('private/users');
  }
}
