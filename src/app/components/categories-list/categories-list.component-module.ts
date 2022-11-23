import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CategoriesListComponent } from './categories-list.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    AsyncPipe,
    NgForOf,
    CommonModule
  ],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
