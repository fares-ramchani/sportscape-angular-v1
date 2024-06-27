import { Component } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 }; 
  zoom = 12;
}
