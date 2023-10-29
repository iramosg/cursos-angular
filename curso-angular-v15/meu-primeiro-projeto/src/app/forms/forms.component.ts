import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  public list: Array<{ comida: string }> = [
    { comida: 'X-Salada' },
    { comida: 'X-Bacon' },
    { comida: 'Coxinha' },
  ];
}
