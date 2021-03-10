import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Discipline} from "../Models/Discipline";

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  public send(discipline): Observable<any>{
    return this.http.post(this.url + 'discipline/create', discipline);
  }
  public disciplines(): Observable<any>{
    return this.http.get(this.url + 'disciplines');
  }
  public deleteDiscipline(id: number): void{
    this.http.post(this.url + 'discipline/delete', id).subscribe();
  }
  public editDiscipline(discipline): void{
    this.http.post(this.url + 'discipline/edit', discipline).subscribe();
  }
  public findDiscipline(id){
    return this.http.get(this.url + 'discipline/' + id);
  }
}
