import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  center: google.maps.LatLngLiteral = { lat:33.8193879, lng: 10.8448079 }; 
  zoom = 13;
}
