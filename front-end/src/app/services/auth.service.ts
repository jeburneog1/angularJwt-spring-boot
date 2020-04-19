import { JwtModel } from './../models/jwt-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'localhost:8085/api/auth';

  constructor(private httpClient: HttpClient) { }

  public login(user: LoginUser): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authUrl + 'login', user, cabecera);
  }

  public register(user: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'nuevo', user, cabecera);
  }
}
