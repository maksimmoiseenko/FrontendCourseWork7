import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get(this.url + 'users');
  }

  deleteUser(id) {
    this.http.post(this.url + 'user/delete', id ).subscribe();
  }
}
