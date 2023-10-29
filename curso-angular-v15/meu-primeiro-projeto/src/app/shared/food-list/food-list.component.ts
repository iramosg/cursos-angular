import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = [];
  constructor(private foodListService: FoodListService) {}

  public ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
    this.foodListService.emitEvent.subscribe((res) =>
      alert(`Você adicionou o item: ${res}`)
    );
  }
}
