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
      position: "Full Stack Developer",
      name: "Ford Analytics",
      picture: "../assets/ford.png",
      description: "Large-scale cloud data streaming and processing",
      chips: ["Frontend Development", "Backend Development", "Database Management (MySQL)", "Apache Kafka", "Unit Testing", "Distributed Systems", "Java", "JavaScript", "Git", "JIRA"] 
    },
    {
      position: "Junior Developer",
      name: "HelloGbye",
      picture: "../assets/hellogbye.png",
      description: "AI driven travel planning & booking.",
      chips: ["Frontend Development", "Backend Development", "Database Management (MongoDB)", "Data Visualization (d3.js)", "Angular 7", "Ionic 4", "Node.js", "Quality Assurance", "Git"],
    }, 
    {
      position: "Personal Project",
      name: "Huddle",
      picture: "../assets/huddle.png",
      description: "A new way to connect NFL Fans & local restaurants.",
      chips: ["React Native", "JavaScript", "Axios (HTTP)", "Frontend Development", "Java (Spring)", "Session-based Authentication", "Git", "MVC Design Patterns"],
    },  
    {
      position: "Personal Project",
      name: "SubTracker",
      description: "Keep track of all your commitments.", 
      picture: "../assets/subtrackersplash.png",
      chips: ["Ionic 4", "Angular 7", "MongoDB", "Frontend Development", "Backend Development", "Token-Based Authentication", "TypeScript", "Node.js"]
    }
  ]

  

  constructor() { }

  ngOnInit() {

  }

  scroll($element: HTMLElement): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
