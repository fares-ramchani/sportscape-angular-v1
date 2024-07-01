import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  center: google.maps.LatLngLiteral = { lat:33.8193879, lng: 10.8448079 }; 
  zoom = 13;

  /*carrousel */
  images: string[] = [
    'assets/images/searshDetail/section1/8324.jpg',
    'assets/images/searshDetail/section1/6158.jpg',
    'assets/images/searshDetail/section1/6159.jpg',
    'assets/images/searshDetail/section1/6161.jpg',
    'assets/images/searshDetail/section1/54436.jpg'
  ];
  isCarouselOpen = false;
  currentIndex = 0;

  openCarousel(index: number) {
    this.currentIndex = index;
    this.isCarouselOpen = true;
  }

  closeCarousel() {
    this.isCarouselOpen = false;
  }

  changeSlide(direction: number) {
    this.currentIndex += direction;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    } else if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }
}
