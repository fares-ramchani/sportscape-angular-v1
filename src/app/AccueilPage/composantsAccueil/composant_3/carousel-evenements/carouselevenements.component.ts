import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselevenements',
  templateUrl: './carouselevenements.component.html',
  styleUrls: ['./carouselevenements.component.css']
})

export class CarouselevenementsComponent implements OnInit {
  cards = [
    {
      title: 'BÉBÉ NAGEUR - EVENT',
      image: '/assets/images/accueil/composant3/imageÉVÈNEMENTS/bebenageur.png',
    },
    {
      title: 'EQUITATION - EVENT',
      image: '/assets/images/accueil/composant3/imageÉVÈNEMENTS/equitation.png',
    },
    {
      title: 'FOOTBALL - TOURNOI',
      image: '/assets/images/accueil/composant3/imageÉVÈNEMENTS/footballtournoi.png',
    },
    {
      title: 'PADEL - TOURNOI',
      image: '/assets/images/accueil/composant3/imageÉVÈNEMENTS/padel.png',
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
