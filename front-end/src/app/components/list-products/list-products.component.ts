import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../models/producto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() user: string;

  products: Producto[] = [];

  constructor(private productService: ProductoService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getList().subscribe(
      data => {
        this.products = data;
      }, (err: any) => {
      console.log(err);
    });
  }

  onDelete(id: number) {
    if (confirm('Are you sure?')) {
      this.productService.deleteProduct(id).subscribe(
        data => {
          this.loadProducts();
        }
      );
    }
  }

}
