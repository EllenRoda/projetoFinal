import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/component/product/product.service';
import { FornecedorService} from 'src/app/component/fornecedor/fornecedor.service';
import { ClienteService } from 'src/app/component/cliente/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(public productService: ProductService, public fornecedorService: FornecedorService, public clienteService: ClienteService) {}
    productCount: number = 0;
    fornecedorCount: number = 0;
    clienteCount: number = 0;

    ngOnInit(): void {
      this.productService.read().subscribe(products => {
      this.productCount = products.length; // Conta a quantidade de produtos
      });
        
      this.fornecedorService.read().subscribe(fornecedores => {
      this.fornecedorCount = fornecedores.length;
      });

      this.clienteService.read().subscribe(clientes => {
      this.clienteCount = clientes.length;
      });
    }
}