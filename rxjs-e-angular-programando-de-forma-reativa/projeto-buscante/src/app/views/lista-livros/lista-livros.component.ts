import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  listaLivros: [];
  campoBusca: string = '';

  constructor(private service: LivroService) {}

  buscarLivros() {
    this.service.buscar(this.campoBusca).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.log(error), // Se parar aqui, não executa o complete
      complete: () => console.log('Observable completado.'),
    });
  }
}
