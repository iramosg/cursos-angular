import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, map, switchMap } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: Livro[];
  campoBusca = new FormControl();
  subscription: Subscription;
  livro: Livro;

  constructor(private service: LivroService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    map((result) => {
      console.log('Requisições ao servidor');
      this.listaLivros = this.livrosResultadoParaLivros(result);
    })
  );

  // buscarLivros() {
  //   this.subscription = this.service.buscar(this.campoBusca).subscribe({
  //     next: (result) => {
  //       console.log('Requisições ao servidor');
  //       this.listaLivros = this.livrosResultadoParaLivros(result);
  //     },
  //     error: (error) => console.log(error), // Se parar aqui, não executa o complete
  //     complete: () => console.log('Observable completado.'),
  //   });
  // }

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}
