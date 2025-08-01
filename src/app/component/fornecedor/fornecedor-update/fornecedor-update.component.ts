import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent {
fornecedor!: Fornecedor;

  constructor(private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.fornecedorService.readById(id!).subscribe((fornecedor: Fornecedor) =>{
      this.fornecedor = fornecedor
    })
  }

  updateFornecedor(): void {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!')
      this.router.navigate(['/fornecedor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }
}
