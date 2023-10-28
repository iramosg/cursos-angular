import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br />
    <button (click)="destruirComponente()">Destruir componente</button>
  `,
})
export class AppComponent {
  public destruir: boolean = true;

  constructor() {}

  public destruirComponente() {
    this.destruir = false;
  }
}
