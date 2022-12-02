import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { JobsListComponent } from './jobs-list.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, RouterLinkWithHref],
  declarations: [JobsListComponent],
  providers: [],
  exports: [JobsListComponent]
})
export class JobsListComponentModule {
}
