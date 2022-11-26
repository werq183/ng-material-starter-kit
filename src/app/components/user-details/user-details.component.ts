import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {UserModel} from "../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  readonly userDetails$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._userService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService) {
  }
}
