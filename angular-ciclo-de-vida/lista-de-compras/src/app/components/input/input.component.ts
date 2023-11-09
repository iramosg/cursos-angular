import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  valorItem!: string;
  constructor() {}

  ngOnInit(): void {}

  adicionarItem() {
    console.log(this.valorItem);
  }
}
