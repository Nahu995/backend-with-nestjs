import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Product } from '../../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product description',
      price: 123,
      image: '',
      stock: 13,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    // return !product ? null : product;
    if (!product) {
      // throw new NotFoundException(`Product #${id} not found`);
      throw new HttpException(`Product #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((product) => product.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    } else {
      return null;
    }
  }

  delete(id: number) {
    // this.products = this.products.filter((product) => product.id !== id);
    // return this.products;
    const index = this.products.findIndex((i) => i.id === id);
    if (index === -1) {
      throw new HttpException(`Product #${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.products.splice(index, 1);
    return new HttpException(`Product #${id} has been deleted`, HttpStatus.OK);
  }
}
