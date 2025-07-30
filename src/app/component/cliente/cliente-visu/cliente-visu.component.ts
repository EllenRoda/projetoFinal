import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-visu',
  templateUrl: './cliente-visu.component.html',
  styleUrls: ['./cliente-visu.component.css']
})
export class ClienteVisuComponent {
cliente: Cliente = {
  cliNome: '',
  cliCpf: '',
  cliStatus: '',
  dataNascimento: '',
  estadoCivil: '',
  profissao: '',
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
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router // Importa o Router para usar no voltar()
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.readById(id).subscribe((prod: Cliente) => {
        this.cliente = prod;
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/clientes']); // Caminho para voltar à lista de cliente
  }
}
