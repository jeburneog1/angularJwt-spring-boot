import { NewUser } from './../../models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: any = {};
  private user: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.user = new NewUser(this.form.nombre, this.form.nombreUsuario, this.form.email, this.form.password);
    this.authService.register(this.user).subscribe(
      data => {
        this.isRegister = true;
        this.isRegisterFail = false;
      },
      (err: any) => {
        console.log(err.error.mensaje);
        this.errorMsg = err.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );
  }

}
