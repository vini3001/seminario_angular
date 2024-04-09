import { Injectable, OnInit } from '@angular/core';
import { Cliente } from './models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Array<Cliente> = []

  constructor() {
    this.carregarClientesDoLocalStorage();
  }

  private carregarClientesDoLocalStorage() {
    const clientesArmazenados = localStorage.getItem('clientes');
    if (clientesArmazenados) {
      this.clientes = JSON.parse(clientesArmazenados);
    }
  }

  public inserir(cliente: Cliente) {
    cliente.id = parseInt(Math.random().toString().split('.')[1])
    this.clientes.push(cliente)

    const strClientes = JSON.stringify(this.clientes)
    localStorage.setItem('clientes', strClientes)
  }

  public alterar(id: number, cliente: Cliente) {
    var index = this.clientes.findIndex((t=>t.id == id))
    this.clientes[index] = cliente

    const strClientes = JSON.stringify(this.clientes)
    localStorage.setItem('clientes', strClientes)
  }

  public deletar(id: number) {
    var index = this.clientes.findIndex((t=>t.id == id))
    this.clientes.splice(index, 1)

    const strClientes = JSON.stringify(this.clientes)
    localStorage.setItem('clientes', strClientes)
  }

  public obterPorId(id: number): Cliente {
    var index = this.clientes.findIndex((cliente) => cliente.id === id)
    var cliente = this.clientes[index]

    return cliente
  }

  public obterTodos(): Cliente[] {
    return this.clientes
  }
}
