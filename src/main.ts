import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'user',
        protoPath: join(__dirname, 'proto/user/user.proto'),
      },
    },
  );

  const config = new DocumentBuilder()
    .setTitle('Generic Login')
    .setDescription('The basic generic login for your front-end project')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200,
  });

  app.use(helmet());
  //app.use(csurf());

  await app.listen(3000);
}
bootstrap();
