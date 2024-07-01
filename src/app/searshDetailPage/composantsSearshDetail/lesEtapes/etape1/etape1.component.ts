import { Component } from '@angular/core';

@Component({
  selector: 'app-etape1',
  templateUrl: './etape1.component.html',
  styleUrls: ['./etape1.component.css']
})
export class Etape1Component {
  
  currentSection: string = 'etape1';

  navigateTo(section: string) {
    this.currentSection = section;
  }
}
