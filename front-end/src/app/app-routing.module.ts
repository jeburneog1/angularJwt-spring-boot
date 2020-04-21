import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { GuardService } from './services/guard.service';
import { LoginComponent } from './components/login/login.component';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuardService as guard} from './services/guard.service';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'admin', component: AdminComponent,
  canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'user', component: UserComponent,
  canActivate: [guard], data: {expectedRol: ['user']}},
  {path: 'lista', component : ListProductsComponent},
  {path: 'detalle/:id', component : DetailProductsComponent,
  canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevo', component : NewProductComponent,
  canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'editar/:id', component : EditProductComponent,
  canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'login', component : LoginComponent},
  {path: 'registro', component : SignInComponent},
  {path: '', component : HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
