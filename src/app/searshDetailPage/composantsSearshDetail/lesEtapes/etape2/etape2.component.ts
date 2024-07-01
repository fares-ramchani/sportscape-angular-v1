import { Component } from '@angular/core';

@Component({
  selector: 'app-etape2',
  templateUrl: './etape2.component.html',
  styleUrls: ['./etape2.component.css'],
})
export class Etape2Component {
  verif: boolean = false;
  descrip() {
    this.verif = !this.verif;
  }
  
  currentSection: string = 'etape2';

  navigateTo(section: string) {
    this.currentSection = section;
  }
}
