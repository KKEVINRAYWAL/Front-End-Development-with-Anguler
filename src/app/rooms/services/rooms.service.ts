import { Injectable } from '@angular/core';
import { Roomlist } from '../rooms';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  Roomlist: Roomlist[] = [
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

  constructor() { 
    console.log('Room Service Initialized');
  }
  getRooms() {
    return this.Roomlist
  }
}
