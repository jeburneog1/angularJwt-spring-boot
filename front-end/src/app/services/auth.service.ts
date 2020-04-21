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

  private authUrl = 'http://localhost:8085/api/auth';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUser): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authUrl + '/login', usuario, cabecera);
  }

  public register(usuario: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + '/nuevo', usuario, cabecera);
  }
}
