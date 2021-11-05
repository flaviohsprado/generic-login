"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
const grpc_user_options_1 = require("./modules/user/grpc/grpc-user.options");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Generic Login')
        .setDescription('The basic generic login for your front-end project')
        .setVersion('1.0')
        .addTag('test')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: '*',
        methods: 'GET,PUT,POST,DELETE',
        optionsSuccessStatus: 200,
    });
    app.use(helmet());
    app.connectMicroservice(grpc_user_options_1.grpcClientOptions);
    await app.startAllMicroservices();
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map