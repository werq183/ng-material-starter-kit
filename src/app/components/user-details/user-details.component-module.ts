import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    NgIf,
    AsyncPipe
  ],
  declarations: [UserDetailsComponent],
  providers: [],
  exports: [UserDetailsComponent]
})
export class UserDetailsComponentModule {
}
