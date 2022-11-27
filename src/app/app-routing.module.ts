import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesChipsComponent } from './components/categories-chips/categories-chips.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoriesChipsComponentModule } from './components/categories-chips/categories-chips.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesChipsComponent }, { path: 'add-product', component: ProductFormComponent }]), CategoriesChipsComponentModule, CategoriesServiceModule, ProductFormComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
