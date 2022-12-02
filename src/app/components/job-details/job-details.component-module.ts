import { NgModule } from '@angular/core';
import { JobDetailsComponent } from './job-details.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    NgIf,
    AsyncPipe
  ],
  declarations: [JobDetailsComponent],
  providers: [],
  exports: [JobDetailsComponent]
})
export class JobDetailsComponentModule {
}
