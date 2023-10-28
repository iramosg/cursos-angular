import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Igor', idade: 10 },
    { nome: 'Jonny', idade: 15 },
    { nome: 'Inês', idade: 20 },
    { nome: 'Jaqueline', idade: 30 },
    { nome: 'Denis', idade: 59 },
    { nome: 'Ana', idade: 13 },
    { nome: 'João', idade: 22 },
  ];

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: 'Teste', idade: Math.random() });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
