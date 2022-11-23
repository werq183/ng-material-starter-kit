import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PublicHolidaysSelectComponent } from './public-holidays-select.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule],
  declarations: [PublicHolidaysSelectComponent],
  providers: [],
  exports: [PublicHolidaysSelectComponent]
})
export class PublicHolidaysSelectComponentModule {
}
