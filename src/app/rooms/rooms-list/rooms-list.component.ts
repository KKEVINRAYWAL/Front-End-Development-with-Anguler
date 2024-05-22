
import { Room, Roomlist } from '../rooms';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: Roomlist[] = [];

  @Output() selectedRoom = new EventEmitter<Roomlist>();

 
  constructor() { }
  ngOnInit(): void {

  }
  selectRoom(room: Roomlist) {
    this.selectedRoom.emit(room);
  }


}
