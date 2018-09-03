import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.getAllProducts();
    this.productService.subject.subscribe(
      {
        next: (term: string) =>
          this.getAllProducts(term)
      });
  }
  // getAllProducts(term?: string) {
  //   this.productService.getAllProducts(term).subscribe(res => {
  //     this.products = [];
  //     let index: number = 0;
  //     res["items"].forEach(product => {
  //       let currentProduct: Product = product.volumeInfo;
  //       currentProduct.id = ++index;
  //       this.products.push(currentProduct);
  //     });
  //     this.productService.subject.next(this.products);
  //     console.log(this.products);
  //   });
  // }

   getAllProducts(term?: string) {
    this.productService.getAllProducts(term).subscribe(res => {
      this.products = res;
      this.productService.subject.next(this.products);
      console.log(this.products);
    });
  }
}

