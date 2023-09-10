import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  getHello(name: string): string {
    return `Hello ${name}`;
  }
}
