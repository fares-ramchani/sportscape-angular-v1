import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-flesh-top',
  templateUrl: './flesh-top.component.html',
  styleUrls: ['./flesh-top.component.css']
})
export class FleshTopComponent {
  isScrollToTopVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrollToTopVisible = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
