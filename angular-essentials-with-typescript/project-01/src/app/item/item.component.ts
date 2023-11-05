import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() character: any;
  // @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onAssign(side: string) {
    // this.character.side = side;
    this.swService.onSideChosen({ name: this.character.name, side });
  }
}
