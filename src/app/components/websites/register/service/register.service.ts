import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = 'http://localhost:8081/api/v1/register';

  constructor(private httpClient: HttpClient) { }

  userRegistration(user: User): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

}
