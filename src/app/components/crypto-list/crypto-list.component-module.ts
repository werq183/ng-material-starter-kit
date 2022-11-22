import { NgModule } from '@angular/core';
import { CryptoListComponent } from './crypto-list.component';
import {MatChipsModule} from "@angular/material/chips";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    MatChipsModule,
    AsyncPipe,
    NgForOf,
    MatCardModule
  ],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
