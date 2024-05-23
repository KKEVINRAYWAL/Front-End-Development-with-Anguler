import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Room, Roomlist } from './rooms';
import { HeaderComponent } from '../header/header.component';

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
  constructor() { }

  ngOnInit(): void {
    console.log(this.headerComponent);
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.Roomlist = [
      {
        roomNumber: 1,
        roomType: 'Single Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 5000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00',
        rating: 2.5
      },
      {
        roomNumber: 2,
        roomType: 'Double Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 10000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 3.5
      },
      {
        roomNumber: 3,
        roomType: 'Delux Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 5000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 4.7
      },
      {
        roomNumber: 4,
        roomType: 'Twin Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 50000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 4.4
      },
      {
        roomNumber: 5,
        roomType: 'Quad Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 105000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 4.5
      },
      {
        roomNumber: 6,
        roomType: 'Queen Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 7000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 3.5
      },
      {
        roomNumber: 7,
        roomType: 'King Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 7000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 4.5
      },
      {
        roomNumber: 8,
        roomType: 'Suite',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 675000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 3.9
      },
      {
        roomNumber: 9,
        roomType: 'Studio Room or Apartment',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 5000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 3.5
      },
      {
        roomNumber: 10,
        roomType: 'Junior Suite',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 85000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 4.5
      },
      {
        roomNumber: 11,
        roomType: 'Executive Suite',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 785000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 4.5
      },
      {
        roomNumber: 12,
        roomType: 'Delux Room',
        amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 5000,
        photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
        checkinTime: '14:00', // 2:00 PM
        checkoutTime: '11:00', // 11:00 AM,
        rating: 4.5
      }
    ];
  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title="Last Title";
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
