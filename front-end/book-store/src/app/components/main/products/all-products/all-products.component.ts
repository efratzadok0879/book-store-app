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
    
      this.getAllProducts("gh");
      this.productService.subject.subscribe(
        {
          next:(term: string)=>
          this.getAllProducts(term)
    });
  }
  getAllProducts(term: string) {
    this.productService.getAllProducts(term).subscribe(res => {
      this.products = res;
      console.log(res);
    });
  }
}

