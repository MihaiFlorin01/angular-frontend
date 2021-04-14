import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../register/model/user';
import {Observable} from 'rxjs/index';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8081/api/v1/login';

  constructor(private httpClient: HttpClient) { }

  userRegistration(user: User): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

}
