import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8081/api/v1/login';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  loginUser(user: User): Observable<object> {
    return this.httpClient.get<User>(`${this.baseURL}`);
  }

  // getById(id: number): Observable<User> {
  //   return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  // }
  //
  // update(id: number, user: User): Observable<object> {
  //   return this.httpClient.put(`${this.baseURL}/${id}`, user);
  // }
  //
  // delete(id: number): Observable<Object>{
  //   const url = this.baseURL + '/delete/' + id ;
  //   console.log( url );
  //   return this.httpClient.delete(url);
  // }

}
