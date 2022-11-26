import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product/:id', component: ProductDetailsComponent }, { path: 'cat-fact', component: CatFactComponent }]), ProductDetailsComponentModule, ProductServiceModule, CatFactComponentModule, CatFactServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
