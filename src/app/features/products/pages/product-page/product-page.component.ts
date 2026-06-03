import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  constructor(public productService: ProductService) {}

  onProductCreated(data: { nombre: string; precio: number }): void {
    this.productService.createProduct(data.nombre, data.precio);
  }

  onProductDeleted(id: number): void {
    this.productService.deleteProduct(id);
  }
}