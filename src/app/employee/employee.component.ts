import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers:[RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string="John";
  constructor(@Self() private roomService: RoomsService) { }
  ngOnInit(): void {

  }
}
