import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {
  currentSection: string = 'etape1';

  navigateTo(section: string) {
    this.currentSection = section;
  }
}
