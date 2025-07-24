import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/component/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(public productService: ProductService) {}
    productCount: number = 0;

    ngOnInit(): void {
      this.productService.read().subscribe(products => {
        this.productCount = products.length; // Conta a quantidade de produtos
      });
    }
}
