import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'list', component : ListProductsComponent},
  {path: 'detalle/:id', component : DetailProductsComponent},
  {path: 'nuevo', component : NewProductComponent},
  {path: 'editar/:id', component : EditProductComponent},
  {path: '', component : HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
