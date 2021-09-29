import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';


@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros: Livro[]

  constructor(private livroService : LivroService ) { }

  ngOnInit(): void {
    this.livros = this.listarTodos();
    this.livros.push (new Livro(111, "A revolução dos Bichos", true));
    this.livros.push (new Livro(112, "Metamorfose", true));
    this.livros.push (new Livro(113, "A Cabana", true));
    this.livros.push (new Livro(114, "Extraordinário", true));
  }

  listarTodos(): Livro[]{
    return this.livroService.listarTodos();
  }

}
