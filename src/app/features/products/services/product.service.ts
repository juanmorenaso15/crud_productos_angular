import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private nextId: number = 1;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(nombre: string, precio: number): void {
    const newProduct: Product = {
      id: this.nextId,
      nombre: nombre,
      precio: precio,
    };
    this.products.push(newProduct);
    this.nextId++;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}