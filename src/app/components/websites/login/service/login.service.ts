import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../register/model/user';
import {Observable} from 'rxjs/index';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8081/api/v1/';

  constructor(private httpClient: HttpClient) { }

  userLogin(user: User): Observable<object> {
    return this.httpClient.post(this.baseURL + 'login', user);
  }

  findEmailByUsername(username: string): Observable<any> {
    return this.httpClient.get(this.baseURL + 'email/' + username);
  }

}
