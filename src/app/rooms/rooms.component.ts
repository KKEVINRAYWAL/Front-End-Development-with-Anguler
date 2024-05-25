import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, ViewChildren, QueryList, SkipSelf } from '@angular/core';
import { Room, Roomlist } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelname = 'Hilton Hotel';
  roomCount = 10;
  hideRooms = false;
  numberofRooms = 20;
  selectedRoom!: Roomlist;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
    capacity: 2,
    id: 1001,
  }

  title = 'Room List'
  Roomlist: Roomlist[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  // roomsService = new RoomsService();

  constructor( private roomService: RoomsService) { }

  ngOnInit(): void {
    console.log(this.headerComponent);
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
   this.Roomlist= this.roomService.getRooms();
  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title = "Last Title";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }

  selectRoom(room: Roomlist) {
    console.log('Selected room received:', room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: Roomlist = {
      roomNumber: 4,
      roomType: 'Delux Room',
      amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
      checkinTime: '14:00', // 2:00 PM
      checkoutTime: '11:00',
      rating: 2.5
    };
    this.Roomlist = [... this.Roomlist, room];
  }

  bookRoom() {
    if (this.roomCount > 0) {
      this.roomCount--;
      alert('Room booked!');
    } else {
      alert('No rooms available!');
    }
  }
}
