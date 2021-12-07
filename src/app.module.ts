import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';
import { FileModule } from './modules/file/file.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { CompanyModule } from './modules/company/company.module';
import { connectionOptions } from './modules/database/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions),
    DatabaseModule,
    FileModule,
    UserModule,
    AuthModule,
    CompanyModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('private/users');
  }
}
