import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  produtos: any[] = []; // Lista original
  produtosFiltrados: any[] = []; // Lista filtrada
  filtroProduto: string = ''; // Texto da busca

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtos = [
      { id: 1, nome: 'Mouse Gamer', precoCusto: 90, precoVenda: 120, marca: 'Redragon', categoria: 'Acessórios', status: 'Ativo' },
    ];
    this.produtosFiltrados = [...this.produtos];
  }

  filtrarProdutos(): void {
    const texto = this.filtroProduto.toLowerCase().trim();
    this.produtosFiltrados = this.produtos.filter(produto =>
      produto.nome.toLowerCase().includes(texto)
    );
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
