import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  title: string='';

  constructor() { }
  ngOnInit(): void {

  }

}
