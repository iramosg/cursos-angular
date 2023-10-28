import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public height: string = '20px';
  public backgroundColor: string = 'red';
  public nome: string = '';
  public list: Array<{ nome: string }> = [{ nome: 'Igor' }];

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.height == '20px') {
        this.height = '50px';
        this.backgroundColor = 'red';
      } else {
        this.height = '20px';
        this.backgroundColor = 'blue';
      }
    }, 2000);
  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
