import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() items: Array<string> = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }
}
