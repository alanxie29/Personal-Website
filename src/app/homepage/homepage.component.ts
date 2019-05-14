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
      chips: ["Frontend Development", "Backend Development", "Database Management (MongoDB)", "Data Visualization (d3.js)", "Angular 7", "Ionic 4", "Node.js", "Postman", "Quality Assurance"],
    }, 
    {
      position: "Personal Project",
      name: "Huddle",
      picture: "../assets/huddle.png",
      description: "A new way to connect NFL Fans & local restaurants.",
      chips: ["React Native", "JavaScript", "Axios (HTTP)", "Frontend Development","Java (Spring)", "Session-based Authentication", "MVC Design Patterns", "RESTful API"],
    },  
    {
      position: "Personal Project",
      name: "SubTracker",
      description: "Keep track of all your commitments.", 
      picture: "../assets/huddle.png",
      chips: ["Ionic 4", "Angular 7", "MongoDB", "Frontend Development", "Backend Development", "Token-Based Authentication", "TypeScript", "Node.js", "RESTful API", "Postman",]
    }
  ]

  

  constructor() { }

  ngOnInit() {

  }

  scroll($element: HTMLElement): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
