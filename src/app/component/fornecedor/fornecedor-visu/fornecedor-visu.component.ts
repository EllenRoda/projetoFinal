import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-visu',
  templateUrl: './fornecedor-visu.component.html',
  styleUrls: ['./fornecedor-visu.component.css']
})
export class FornecedorVisuComponent implements OnInit {
fornecedor: Fornecedor = {
  forNomeFantasia: '',
  forRazaoSocial: '',
  forCpf: '',
  forStatus: '',
  forDataCadastro: null,
  forResponsavel: '',

  conCelular: '',
  conTelefoneComercial: '',
  conEmail: '',

  endRua: '',
  endNumero: '',
  endCidade: '',
  endBairro: '',
  endCep: '',
  endEstado: '',
  endPais: '',
  endComplemento: '',
  endTipoResidencia: ''
}

  constructor(
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router // Importa o Router para usar no voltar()
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fornecedorService.readById(id).subscribe((forn: Fornecedor) => {
        this.fornecedor = forn;
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/fornecedor']); // Caminho para voltar à lista de fornecedores
  }
}
