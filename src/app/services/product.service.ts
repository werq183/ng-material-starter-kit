import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(`https://fakestoreapi.com/products/${id}`);
  }
}
