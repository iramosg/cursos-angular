import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  constructor(private http: HttpClient) {}

  public emitEvent = new EventEmitter();
  private url: string = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}foods`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(`${this.url}foods`, { nome: value }, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http
      .put<FoodList>(`${this.url}foods/${id}`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}foods/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
