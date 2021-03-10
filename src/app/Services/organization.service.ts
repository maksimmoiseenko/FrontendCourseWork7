import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  public get3Organization(){
    return this.http.get(this.url + '3organization');
  }
  public getOrganizations(){
    return this.http.get(this.url + 'organizations');
  }

  deleteOrganization(id) {
    this.http.post(this.url + 'organization/delete', id).subscribe();
  }
}
