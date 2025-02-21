import { Injectable } from '@nestjs/common';

// NOTE: APP SERVICE
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
