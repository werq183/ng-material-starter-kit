import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CatFactService} from "../../services/cat-fact.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactComponent {

  constructor(private _catFactService: CatFactService) {

  }
  readonly data$: Observable<any> = this._catFactService.getAll();

}
