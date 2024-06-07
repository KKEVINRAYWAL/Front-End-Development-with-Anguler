import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Roomlist, Room } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  Roomlist: Roomlist[] = [
    // Room list data...
  ];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint); // logs the API endpoint
    console.log('Room Service Initialized');
  }

  getRooms(): Observable<Roomlist[]> {
    return this.http.get<Roomlist[]>('/api/rooms'); // Specify the type
  }

  addRoom(room: Roomlist): Observable<Roomlist[]> {
    return this.http.post<Roomlist[]>('/api/rooms', room);
  }

  editRoom(room: Roomlist): Observable<Roomlist[]> {
    return this.http.put<Roomlist[]>('/api/rooms', room);
  }

  deleteRoom(roomNumber: string): Observable<Roomlist[]> {
    return this.http.delete<Roomlist[]>(`/api/rooms/${roomNumber}`);
  }
  getPhotos(){
    const request= new HttpRequest (
      'GET', 
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  
  }
}

