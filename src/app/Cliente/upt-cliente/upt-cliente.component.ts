import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-upt-cliente',
  templateUrl: './upt-cliente.component.html',
  styleUrl: './upt-cliente.component.css'
})
export class UptClienteComponent implements OnInit {
  cliente: Cliente = {}
  clienteExemp: Cliente = {}

  constructor(private service: ClienteService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = parseFloat(this.route.snapshot.paramMap.get('id') as string);
    const client = this.service.obterPorId(id)
    
    client.subscribe({
      next: (dados) => {
        console.log(dados)
        this.cliente = dados
      }
    });
  }

  submitForm() {
    console.log(this.cliente)
    this.service.alterar(this.cliente.id as number, this.cliente).subscribe({
      next: (dado) => {
        alert('usuário alterado com sucesso' + dado)
      }
    })
    this.router.navigate(['/'])
  }
}
