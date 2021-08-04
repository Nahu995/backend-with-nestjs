import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getFilter(): string {
    return `orders controller`;
  }
}
