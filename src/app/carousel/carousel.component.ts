import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  imageSources: String[] = [
    "https://helpx.adobe.com/ca/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg",
    "https://www.w3schools.com/w3css/img_lights.jpg",
    "https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529__340.jpg"  
  ]
  ngOnInit() {
  }

}
