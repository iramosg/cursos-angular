import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name" />
    <!-- <input type="text" [(ngModel)]="name" /> -->
    <p>Hello, {{ name }}!</p>
    <p>I'm the user component</p>
  `,
})
export class UserComponent {
  @Input() name: any;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event: any) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
