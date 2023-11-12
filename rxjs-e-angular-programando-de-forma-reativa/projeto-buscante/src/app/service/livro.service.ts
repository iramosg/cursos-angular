import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly api = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscar(valorDigitado: string): Observable<Item[]> {
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get<LivrosResultado>(this.api, { params }).pipe(
      // tap((result) => console.log(result)),
      map((result) => result.items)
      // tap((result) => console.log('Fluxo após o map', result))
    );
  }
}
