import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactComponent } from './cat-fact.component';
import { AsyncPipe } from '@angular/common';

@NgModule({
  imports: [
    AsyncPipe,
    CommonModule
  ],
  declarations: [CatFactComponent],
  providers: [],
  exports: [CatFactComponent]
})
export class CatFactComponentModule {
}
