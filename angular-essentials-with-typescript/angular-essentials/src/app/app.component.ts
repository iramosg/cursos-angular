import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Igor';
  rootItems = ['Apples', 'Bananas', 'Cherries'];
  number = 0;

  onNameChanged(newName: string) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onIncrease() {
    this.number = this.number * 2;
  }
}
