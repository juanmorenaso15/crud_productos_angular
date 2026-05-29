import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
