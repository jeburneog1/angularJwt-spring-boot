import { LoginUser } from './../../models/login-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  usuario: LoginUser;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  errorMsg = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
