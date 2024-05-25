import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef, Optional } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';  // Adjust the import path as needed

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  loginTypes = 'Admin';
  role = 'User';

  @ViewChild('name', { static: true }) name!: ElementRef;
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(@Optional() private loggerService: LoggerService) {  // Corrected usage of LoggerService
  }

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotel";
    // this.loggerService?.log('AppComponent.ngOnInit()');  // Using loggerService to avoid linting error
  }
}




// @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

// ngAfterViewInit() {
//   const componentRef = this.vcr.createComponent(RoomsComponent);
//   componentRef.instance.numberofRooms= 50;
// }
