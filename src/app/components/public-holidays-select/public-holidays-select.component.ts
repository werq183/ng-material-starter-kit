import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicHolidaysService } from '../../services/public-holidays.service';
import {PublicHolidaysModel} from "../../models/public-holidays.model";

@Component({
  selector: 'app-public-holidays-select',
  styleUrls: ['./public-holidays-select.component.scss'],
  templateUrl: './public-holidays-select.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidaysSelectComponent {
  readonly select$: Observable<PublicHolidaysModel[]> = this._publicHolidaysService.getAll();

  constructor(private _publicHolidaysService: PublicHolidaysService) {
  }
}
