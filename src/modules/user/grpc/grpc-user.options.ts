import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcUserOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:3001',
    package: 'user',
    protoPath: join(__dirname, './user.proto'),
  },
};
