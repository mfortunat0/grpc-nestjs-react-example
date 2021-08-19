import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface MathService {
  multiply(data: { number: number }): Observable<any>;
}

@Controller()
export class AppController {
  private mathService: MathService;
  constructor(@Inject('MY_GRPC') private client: ClientGrpc) {}

  onModuleInit() {
    this.mathService = this.client.getService<MathService>('MathService');
  }

  @Get()
  async create(@Query('number') number: number) {
    try {
      return await this.mathService.multiply({ number }).toPromise();
    } catch (e) {
      throw new RpcException({ code: e.code, message: e.message });
    }
  }
}
