import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly form: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl() });

  constructor(private _productService: ProductService) {
  }

  onFormSubmitted(form: FormGroup): void {
    this._productService.create({
      title: form.get('title')?.value,
      price: form.get('price')?.value
    }).subscribe();
  }
}
