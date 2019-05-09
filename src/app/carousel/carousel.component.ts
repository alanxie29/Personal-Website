import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  imageSources: String[] = [
    "../assets/angular.png",
    "../assets/javascript.png",
    "../assets/mongo.jpg",
    "../assets/ionic.png",
    "../assets/react.png",
    "../assets/react-native.png",
    "../assets/node.png",
    // "../assets/python.png", 
  ]

  ngOnInit() {

  }

}
