import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }
  getOne(id: string): Observable<UserModel> {
    return this._httpClient.get<UserModel>(`https://fakestoreapi.com/users/${id}`);

  }
}
