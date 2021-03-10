import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  public send(account): Observable<any>{
    return this.http.post(this.url + 'sign_up', account);
  }
}
