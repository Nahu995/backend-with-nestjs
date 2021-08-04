import { Injectable } from '@nestjs/common';
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
    return this.products.find((item) => item.id === id);
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
    this.products = this.products.filter((product) => product.id !== id);
    return this.products;
  }
}
