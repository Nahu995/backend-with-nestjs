import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from '../../services/products/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getFilter() {
    return { message: `filter` };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    // response.status(200).send({ message: `product ${productId}` });
    // return { message: `product ${productId}` };
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    // return {
    //   id,
    // };
    return this.productsService.delete(+id);
  }
}
