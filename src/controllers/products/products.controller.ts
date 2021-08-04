import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): { message: string } {
    return {
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  @Get('filter')
  getFilter(): { message: string } {
    return { message: `filter` };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string): { message: string } {
    return { message: `product ${productId}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
