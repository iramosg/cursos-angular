import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Bem-vindo!';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Foi alterado com sucesso');
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('Componente destruído');
  }
}
