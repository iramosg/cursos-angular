import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributo</h1>
      <hr />
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Teste 2</h1>
      <hr />
    </app-diretivas-atributos> -->
    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <app-new-component></app-new-component>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
