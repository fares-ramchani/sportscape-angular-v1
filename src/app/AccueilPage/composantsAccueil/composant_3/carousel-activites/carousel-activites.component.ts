import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-activites',
  templateUrl: './carousel-activites.component.html',
  styleUrls: ['./carousel-activites.component.css'],
})
export class CarouselActivitesComponent implements OnInit {
  cards = [
    {
      title: 'football',
      image: '/assets/images/accueil/composant3/imageactivite/football.png',
    },
    {
      title: 'basketball',
      image: '/assets/images/accueil/composant3/imageactivite/basketball.png',
    },
    {
      title: 'handball',
      image: '/assets/images/accueil/composant3/imageactivite/handball.png',
    },
    {
      title: 'natation',
      image: '/assets/images/accueil/composant3/imageactivite/natation.png',
    },
    {
      title: 'volleyball',
      image: '/assets/images/accueil/composant3/imageactivite/volleyball.png',
    },
  ];

  currentIndex = 0;
  cardWidth = 240; // Card width in pixels
  cardMargin = 20; // Sum of left and right margins
  transitionTimeout: any; // Variable to hold timeout ID

  ngOnInit(): void {
    this.startAutoPlay(); // Start autoplay when component initializes
  }

  ngOnDestroy(): void {
    clearTimeout(this.transitionTimeout); // Clear timeout on component destroy
  }

  get transformStyle() {
    const cardWidthWithMargin = this.cardWidth + this.cardMargin;
    return `translateX(-${this.currentIndex * cardWidthWithMargin}px)`;
  }

  prev() {
    if (this.currentIndex == 0) {
      this.currentIndex =
        (this.currentIndex - 0 + this.cards.length) % this.cards.length;
    } else {
      this.currentIndex =
        (this.currentIndex - 1 + this.cards.length) % this.cards.length;
      this.restartAutoPlay();
    }
  }

  next() {
    if (this.currentIndex < this.cards.length - 4) {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    } else {
      this.currentIndex = 0; // Reset to the first card if at the last card
    }
    this.restartAutoPlay();
  }

  startAutoPlay() {
    this.transitionTimeout = setTimeout(() => {
      this.next(); // Automatically transition to next card
    }, 2000); // Set delay between transitions (5000 milliseconds = 5 seconds)
  }

  restartAutoPlay() {
    clearTimeout(this.transitionTimeout); // Clear previous timeout
    this.startAutoPlay(); // Restart autoplay with updated currentIndex
  }
}
