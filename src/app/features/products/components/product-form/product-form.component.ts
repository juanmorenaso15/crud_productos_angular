import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Output() productCreated = new EventEmitter<{ nombre: string; precio: number }>();

  nombre: string = '';
  precio: number | null = null;

  isFormValid(): boolean {
    return this.nombre.trim().length > 0 &&
      this.precio !== null &&
      this.precio > 0;
  }

  onSubmit(): void {
    if (!this.isFormValid()) return;

    this.productCreated.emit({
      nombre: this.nombre.trim(),
      precio: this.precio!
    });
    
    this.resetForm();
  }

  resetForm(): void {
    this.nombre = '';
    this.precio = null;
  }
}