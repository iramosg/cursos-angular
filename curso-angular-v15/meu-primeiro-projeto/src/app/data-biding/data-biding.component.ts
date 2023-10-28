import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent {
  public nome: string = 'Igor';
  public idade: number = 27;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string =
    'https://vidafullstack.com.br/wp-content/uploads/2021/07/versao-12-angular-980x487.png';
  public imgTitle: string = 'Property Biding';
  public position: { x: number; y: number } = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMouveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
