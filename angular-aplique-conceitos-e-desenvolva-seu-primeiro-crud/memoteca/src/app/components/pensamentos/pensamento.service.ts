import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly api = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(
    pagina: number,
    filtro: string,
    favoritos: boolean
  ): Observable<Pensamento[]> {
    const itensPorPagina = 3;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

    if (filtro.trim().length > 2) params = params.set('q', filtro);
    if (favoritos) params = params.set('favorito', true);

    return this.http.get<Pensamento[]>(this.api, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.api, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.api}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.api}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.api}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
