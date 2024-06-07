
// import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
// import { Room, Roomlist } from './rooms';
// import { HeaderComponent } from '../header/header.component';
// import { RoomsService } from './services/rooms.service';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'hinv-rooms',
//   templateUrl: './rooms.component.html',
//   styleUrls: ['./rooms.component.css']
// })
// export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
//   hotelname = 'Hilton Hotel'; // Hotel name
//   roomCount = 10; // Initial room count
//   hideRooms = true; // Boolean to toggle room visibility
//   numberofRooms = 20; // Total number of rooms
//   selectedRoom!: Roomlist; // Selected room

//   rooms: Room = {
//     totalRooms: 20,
//     availableRooms: 10,
//     bookedRooms: 5,
//     capacity: 2,
//     id: 1001,
//   };

//   title = 'Room List'; // Title for the room list
//   Roomlist: Roomlist[] = []; // Array to store the room list
//   stream = new Observable(observer => {
//     observer.next('user1');
//     observer.next('user2');
//     observer.next('user3');
//     observer.complete();
//   }); // Observable stream for demonstration purposes

//   @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; // Access to HeaderComponent instance
//   @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>; // Access to multiple HeaderComponent instances

//   constructor(private roomService: RoomsService, private cd: ChangeDetectorRef) {} // Injecting the RoomsService and ChangeDetectorRef

//   ngOnInit(): void {
//     this.roomService.getPhotos().subscribe((data) => {
//       console.log(data);
//     });

//     this.stream.subscribe((data) => console.log(data)); // Subscribing to the stream observable
//     console.log(this.headerComponent);
//     // Fetching rooms from the service
//     this.roomService.getRooms().subscribe((rooms: Roomlist[]) => {
//       this.Roomlist = rooms;
//     });
//   }

//   ngDoCheck() {
//     console.log('on changes is called'); // Lifecycle hook to detect changes
//   }

//   ngAfterViewInit() {
//     this.headerComponent.title = "Rooms View"; // Setting title for the header component
//     this.cd.detectChanges(); // Detecting changes to update the view
//     if (this.headerChildrenComponent.last) {
//       this.headerChildrenComponent.last.title = "Last Title"; // Setting title for the last header component in the list
//       this.cd.detectChanges(); // Detecting changes to update the view
//     }
//   }

//   toggle() {
//     this.hideRooms = !this.hideRooms; // Toggling the visibility of rooms
//     this.title = "Rooms List";
//   }

//   selectRoom(room: Roomlist) {
//     console.log('Selected room received:', room); // Logging the selected room
//     this.selectedRoom = room; // Assigning the selected room
//   }

//   addRoom() {
//     const room: Roomlist = {
//       // roomNumber: '4', // Ensure roomNumber is included
//       roomType: 'Delux Room',
//       amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
//       price: 500,
//       photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
//       checkinTime: '14:00',
//       checkoutTime: '11:00',
//       rating: 2.5
//     };
    
//     // Calling the service method to add the room
//     this.roomService.addRoom(room).subscribe((updatedRoomList: Roomlist[]) => {
//       this.Roomlist = updatedRoomList; // Updating the room list with the response
//     });
//   }

//   editRoom() {
//     const room: Roomlist = {
//       roomNumber: '3',
//       roomType: 'Delux Room',
//       amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
//       price: 500,
//       photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
//       checkinTime: '14:00',
//       checkoutTime: '11:00',
//       rating: 2.5
//     };
//     this.roomService.editRoom(room).subscribe((data) => {
//       this.Roomlist = data;
//     });
//   }

//   deleteRoom(roomNumber: string) {
//     this.roomService.deleteRoom(roomNumber).subscribe((data) => {
//       this.Roomlist = data;
//     });
//   }

//   bookRoom() {
//     if (this.roomCount > 0) {
//       this.roomCount--; // Decreasing the room count
//       alert('Room booked!'); // Showing an alert
//     } else {
//       alert('No rooms available!'); // Showing an alert if no rooms are available
//     }
//   }
// }
import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { Room, Roomlist } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelname = 'Hilton Hotel';
  roomCount = 10;
  hideRooms = true;
  numberofRooms = 20;
  selectedRoom!: Roomlist;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
    capacity: 2,
    id: 1001,
  };

  title = 'Room List';
  Roomlist: Roomlist[] = [];
  photos: any[] = [];
  visiblePhotos: any[] = [];
  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  progress: number = 0;
  loading: boolean = false;
  photosPerPage: number = 10;
  currentPage: number = 0;
  hasMorePhotos: boolean = true;

  constructor(private roomService: RoomsService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadPhotos();

    this.stream.subscribe((data) => console.log(data));
    console.log(this.headerComponent);

    this.roomService.getRooms().subscribe((rooms: Roomlist[]) => {
      this.Roomlist = rooms;
    });
  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";
    this.cd.detectChanges();
    if (this.headerChildrenComponent.last) {
      this.headerChildrenComponent.last.title = "Last Title";
      this.cd.detectChanges();
    }
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: Roomlist) {
    console.log('Selected room received:', room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: Roomlist = {
      roomNumber: '4',
      roomType: 'Delux Room',
      amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
      checkinTime: '14:00',
      checkoutTime: '11:00',
      rating: 2.5
    };

    this.roomService.addRoom(room).subscribe((updatedRoomList: Roomlist[]) => {
      this.Roomlist = updatedRoomList;
    });
  }

  editRoom() {
    const room: Roomlist = {
      roomNumber: '3',
      roomType: 'Delux Room',
      amenities: 'Air conditioner, Free WIFI, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/gray-padded-chaise-couch-beside-window-rEJxpBskj3Q',
      checkinTime: '14:00',
      checkoutTime: '11:00',
      rating: 2.5
    };
    this.roomService.editRoom(room).subscribe((data) => {
      this.Roomlist = data;
    });
  }

  deleteRoom(roomNumber: string) {
    this.roomService.deleteRoom(roomNumber).subscribe((data) => {
      this.Roomlist = data;
    });
  }

  bookRoom() {
    if (this.roomCount > 0) {
      this.roomCount--;
      alert('Room booked!');
    } else {
      alert('No rooms available!');
    }
  }

  loadPhotos() {
    this.loading = true;
    this.roomService.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request sent');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header received');
          break;
        case HttpEventType.DownloadProgress:
          this.progress = Math.round((100 * event.loaded) / (event.total ?? 1));
          console.log(`Download in progress: ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('Data received:', event.body);
          this.photos = event.body as any[];
          this.updateVisiblePhotos();
          this.loading = false;
          break;
      }
    });
  }

  updateVisiblePhotos() {
    const startIndex = this.currentPage * this.photosPerPage;
    const endIndex = startIndex + this.photosPerPage;
    const newPhotos = this.photos.slice(startIndex, endIndex);
    this.visiblePhotos = [...this.visiblePhotos, ...newPhotos];
    this.currentPage++;
    this.hasMorePhotos = this.visiblePhotos.length < this.photos.length;
  }

  loadMorePhotos() {
    this.updateVisiblePhotos();
  }
}
