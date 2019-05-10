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
      description: "AI driven travel planning & booking.",
      chips: ["Front End Development", "Database Management (MongoDB)", "Data Visualization (d3.js)", "Angular 7", "Ionic 4", "Node.js", "Quality Assurance"],
    }, 
    {
      position: "Personal Project",
      name: "Huddle",
      picture: "../assets/huddle.png",
      description: "A new way to connect NFL Fans & local restaurants.",
      chips: ["React Native", "Axios (Http)", "Java (Spring)", "Authentication Flow"],
    },
    {
      name: "Personal Website",
      picture: "../assets/hellogbye.png"
    },
    {
      position: "Personal Project",
      name: "SubTracker",
      picture: "../assets/huddle.png"
    }
  ]

  

  constructor() { }

  ngOnInit() {

  }

  scroll($element: HTMLElement): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  } 

}
