import {EventEmitter, Injectable, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {BehaviorSubject, Observable} from 'rxjs/index';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8081/api/v1/login';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/users`);
  }

  loginUser(user: User): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }


  // currentMessage = this.messageSource.asObservable();

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
