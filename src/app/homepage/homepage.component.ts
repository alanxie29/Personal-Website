import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private _opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  } 

}
