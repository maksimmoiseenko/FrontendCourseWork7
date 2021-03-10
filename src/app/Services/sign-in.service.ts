import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  public send(loginForm): Observable<any>{
    return this.http.post(this.url + 'sign_in', loginForm);
  }
}
