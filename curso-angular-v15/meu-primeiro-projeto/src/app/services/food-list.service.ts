import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  constructor() {}

  public emitEvent = new EventEmitter();

  private list: Array<string> = ['X-Bacon', 'Feijão', 'Ovo'];

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
