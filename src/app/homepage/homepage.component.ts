import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private _opened: boolean = false;
  public projects: any[] = [
    {
      position: "Junior Developer",
      name: "HelloGbye",
      picture: "../assets/hellogbye.png",
      chips: ["Front End", "Database Management (MongoDB)",]
    }, 
    {
      name: "SubTracker"
    },
    {
      name: "Personal Website"
    }
  ]

  

  constructor() { }

  ngOnInit() {
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  } 

}
