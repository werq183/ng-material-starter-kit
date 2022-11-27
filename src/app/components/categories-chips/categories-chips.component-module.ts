import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CategoriesChipsComponent } from './categories-chips.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [CategoriesChipsComponent],
  providers: [],
  exports: [CategoriesChipsComponent]
})
export class CategoriesChipsComponentModule {
}
