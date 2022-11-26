import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartServiceModule } from './services/cart.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product/:id', component: ProductDetailsComponent }, { path: 'cat-fact', component: CatFactComponent }, { path: 'age/:name', component: AgePredictionComponent }, { path: 'cart/:id', component: CartDetailsComponent }]), ProductDetailsComponentModule, ProductServiceModule, CatFactComponentModule, CatFactServiceModule, AgePredictionComponentModule, CartDetailsComponentModule, CartServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
