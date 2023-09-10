import { Body, Controller, Get, Inject, Redirect } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('COMPANY_SERVICE') private client: ClientProxy) {}

  @Get()
  @Redirect('api/doc')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  apiDoc(): void {}

  @Get('company')
  sendCompany(@Body('name') name: string) {
    return this.client.send('get-company', name);
  }
}
