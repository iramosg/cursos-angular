import { HttpClient } from '@angular/common/http';
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

  private list: Array<string> = ['X-Bacon', 'Feijão', 'Ovo'];

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}foods`).pipe(
      (res) => res,
      (error) => error
    );
  }

  // public foodListAdd(value: string) {
  //   this.foodListAlert(value);
  //   return this.list.push(value);
  // }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}foods`, { nome: value }).pipe(
      (res) => res,
      (error) => error
    );
  }

  // public foodListAlert(value: string) {
  //   return this.emitEvent.emit(value);
  // }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
