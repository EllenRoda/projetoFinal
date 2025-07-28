import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/component/product/product.model';
import { ProductService } from 'src/app/component/product/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent implements OnInit
{
  searchTerm: string = '';
  allProduct: Product[] = [];
  filteredProduct: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productService.read().subscribe(product => {
      this.allProduct = product;
      this.filteredProduct = product;
    });
  }
  navigateToProductCreate(): void
  {
    this.router.navigate(['/product/create'])
  }
  filterProduct(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProduct = this.allProduct.filter(p =>
      (p.proNome.toLowerCase().includes(term)));
  }
}