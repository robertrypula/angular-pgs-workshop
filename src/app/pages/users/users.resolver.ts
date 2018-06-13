import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import UsersModel from '../../common/models/users/users.model';

@Injectable()
export class UsersResolver implements Resolve<UsersModel> {
  private USERS_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UsersModel> {
    return this.http.get<UsersModel>(this.USERS_URL);
  }
}
