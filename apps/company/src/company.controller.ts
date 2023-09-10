import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @MessagePattern('get-company')
  sendHello(@Payload() name: string): string {
    return this.companyService.getHello(name);
  }
}
