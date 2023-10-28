import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Igor', idade: 27 },
    { nome: 'Jonny', idade: 31 },
    { nome: 'João', idade: 29 },
  ];

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
