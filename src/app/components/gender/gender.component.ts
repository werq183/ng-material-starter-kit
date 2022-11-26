import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {GenderService} from "../../services/gender.service";
import {GenderModel} from "../../models/gender.model";

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenderComponent {
  readonly gender$: Observable<GenderModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._genderService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _genderService: GenderService) {
  }
}
