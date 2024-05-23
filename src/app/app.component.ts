import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotel";

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberofRooms= 50;
  // }
}
