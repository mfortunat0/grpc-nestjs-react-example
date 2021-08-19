import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MY_GRPC',
        transport: Transport.GRPC,
        options: {
          url: 'micro2:9090',
          package: 'MY_GRPC',
          protoPath: join(__dirname, '../multiply.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
