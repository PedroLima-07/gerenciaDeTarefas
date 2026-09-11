import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IGerenciador } from '../models/IGerenciador';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
   nome: string = 'Pedro';
  qtdeClicks: number = 0;
  mostrarTabela: boolean = true;
  adicionar: string = '';
  listaTarefas: IGerenciador[] = [
    { id: 1, nome: 'Pedro', ativo: true },
    { id: 2, nome: 'Maria', ativo: true },
    { id: 3, nome: 'João', ativo: false },
  ];

  adicionarTarefa() {
    if (this.adicionar.trim() !== '') {
      const novaTarefa: IGerenciador = {
        id: this.listaTarefas.length + 1,
        nome: this.adicionar,
        ativo: true,
      };
      this.listaTarefas.push(novaTarefa);
      this.adicionar = '';
    }
  }

  removerTarefa(tarefa: IGerenciador) {
    const index = this.listaTarefas.indexOf(tarefa);
    if (index > -1) {
      this.listaTarefas.splice(index, 1);
    }
  }
}
