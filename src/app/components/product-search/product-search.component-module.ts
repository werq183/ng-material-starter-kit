import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductSearchComponent } from './product-search.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [ProductSearchComponent],
  providers: [],
  exports: [ProductSearchComponent]
})
export class ProductSearchComponentModule {
}
