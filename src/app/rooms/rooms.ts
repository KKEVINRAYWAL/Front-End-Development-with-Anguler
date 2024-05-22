export interface Room {
    id: number;
    availableRooms: number;
    bookedRooms:number;
    capacity: number;
    totalRooms: number;
  }
export interface Roomlist{
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: string;
    checkoutTime: string;
    roomNumber: number;
    rating:number;
}