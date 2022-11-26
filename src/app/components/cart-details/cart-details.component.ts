import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {CartService} from "../../services/cart.service";
import {CartModel} from "../../models/cart.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent {
  readonly cartDetails$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._cartService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }
}
