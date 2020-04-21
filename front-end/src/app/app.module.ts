import { interceptorProvider } from './services/product-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HomeComponent } from './components/home/home.component';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    HomeComponent,
    DetailProductsComponent,
    NewProductComponent,
    EditProductComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
