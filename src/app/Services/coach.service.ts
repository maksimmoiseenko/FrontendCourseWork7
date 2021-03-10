import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {
  }
  public getCoachs(){
    return this.http.get(this.url + 'coachs');
  }
  public get3coach(){
    return this.http.get(this.url + '3coach');
  }
  public deleteCoach(id: number){
    this.http.post(this.url + 'coach/delete', id).subscribe();
  }
}
