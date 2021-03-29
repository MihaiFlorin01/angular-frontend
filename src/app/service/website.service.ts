import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Website} from '../model/website';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  private baseURL = 'http://localhost:8081/api/v1/websites';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Website[]> {
    return this.httpClient.get<Website[]>(`${this.baseURL}`);
  }

  create(website: Website): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, website);
  }

  getById(id: number): Observable<Website> {
    return this.httpClient.get<Website>(`${this.baseURL}/${id}`);
  }

  update(id: number, website: Website): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, website);
  }

  delete(id: number): Observable<Object>{
    const url = this.baseURL + '/delete/' + id ;
    console.log( url );
    return this.httpClient.delete(url);
  }
}
