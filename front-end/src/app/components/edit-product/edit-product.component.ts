import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  form: any = {};
  updated = false;
  failUpdated = false;
  msjError = '';
  msjOk = '';

  failInit = false;

  constructor(private productservice: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.editProduct();
  }

  editProduct() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productservice.getDetail(id).subscribe(
      data => {
        this.form.nombreProducto = data.nombreProducto;
        this.form.precio = data.precio;
      },
      (err: any) => {
        this.failInit = true;
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productservice.editProduct(this.form, id).subscribe(
      data => {
        this.updated = true;
        this.failUpdated = false;
        this.msjOk = data.mensaje;
      },
      (err: any) => {
        this.updated = false;
        this.failUpdated = true;
        this.msjError = err.error.mensaje;
      }
    );
  }

  getBack() {
    window.history.back();
  }

}
