import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EMPTY,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Item } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();
  mensagemErro = '';
  constructor(private service: LivroService) {}

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    tap(() => console.log('Fluxo inicial')),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)), // Vai pegar o último valor digitado para enviar ao servidor
    tap((result) => console.log('Requisição ao servidor', result)),
    map((result) => this.livrosResultadoParaLivros(result)),
    catchError((erro) => {
      console.log(erro);
      this.mensagemErro = 'Ops, ocorreu um erro. Recaregue a aplicação.';
      return EMPTY;
      // return throwError(
      //   () =>
      //     new Error(
      //       (this.mensagemErro = 'Ops, ocorreu um erro. Recaregue a aplicação.')
      //     )
      // );
    })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => new LivroVolumeInfo(item));
  }
}
