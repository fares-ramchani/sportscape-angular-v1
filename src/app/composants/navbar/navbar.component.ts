import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  closenav:boolean=false
  closepopup() {
    this.closenav=!this.closenav
  }
  Deconnexion(){
   

  }
}
