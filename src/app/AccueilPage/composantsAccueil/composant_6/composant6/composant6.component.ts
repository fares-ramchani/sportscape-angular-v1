import { Component } from '@angular/core';

@Component({
  selector: 'app-composant6',
  templateUrl: './composant6.component.html',
  styleUrls: ['./composant6.component.css'],
})
export class Composant6Component {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
