import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getFilter(): string {
    return `customers controller`;
  }
}
