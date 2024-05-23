import { Room, Roomlist } from '../rooms';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css',], // Corrected to 'styleUrls'
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: Roomlist[] = [];
  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<Roomlist>();

  ngOnChanges(changes: SimpleChanges): void { // Now SimpleChanges is correctly imported
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(changes);
    if (changes['title']) {
      this.title= changes['title'].currentValue.toUpperCase();
    }
  }
 
  constructor() { }
  ngOnInit(): void {

  }
  selectRoom(room: Roomlist) {
    this.selectedRoom.emit(room);
  }
}
