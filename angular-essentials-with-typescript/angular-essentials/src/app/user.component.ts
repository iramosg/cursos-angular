import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" />
    <p>Hello, {{ name }}!</p>
    <p>I'm the user component</p>
  `,
})
export class UserComponent {
  name = 'Igor';

  onUserInput(event: any) {
    this.name = event.target.value;
  }
}
