import { NgModule } from '@angular/core';
import { CartDetailsComponent } from './cart-details.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    NgIf,
    AsyncPipe
  ],
  declarations: [CartDetailsComponent],
  providers: [],
  exports: [CartDetailsComponent]
})
export class CartDetailsComponentModule {
}
