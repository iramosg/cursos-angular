import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  constructor() {}

  private list: Array<string> = ['X-Bacon', 'Feijão', 'Ovo'];

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    return this.list.push(value);
  }
}
