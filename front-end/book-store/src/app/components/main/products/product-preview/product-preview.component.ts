import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../../imports';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input()
  product:Product;
  constructor(private router:Router) { }

  ngOnInit() {

  }
  viewDetails(){
    this.router.navigate(['/bookStore/products/productDetails',this.product.id]);
  }
}
