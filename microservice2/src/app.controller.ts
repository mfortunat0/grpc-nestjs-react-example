import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('MathService', 'Multiply')
  findOne(data: { number: number }, metadata: Metadata) {
    return {
      number: data.number * 2,
    };
  }
}
