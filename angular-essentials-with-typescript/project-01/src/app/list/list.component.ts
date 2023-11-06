import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  characters: any = [];
  activateRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription: any;
  // @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  // onSideAssigned(charInfo: any) {
  //   this.sideAssigned.emit(charInfo);
  // }

  constructor(activateRoute: ActivatedRoute, swService: StarWarsService) {
    this.activateRoute = activateRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.characters = this.swService.getCharacters(params.side);
      this.loadedSide = params.side;
    });

    this.subscription = this.swService.charactersChanged.subscribe(() => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
