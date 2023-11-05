import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characters: any;
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onSideAssigned(charInfo: any) {
    this.sideAssigned.emit(charInfo);
  }
}
