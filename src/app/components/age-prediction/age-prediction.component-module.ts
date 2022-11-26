import { NgModule } from '@angular/core';
import { AgePredictionComponent } from './age-prediction.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    NgIf,
    AsyncPipe
  ],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
