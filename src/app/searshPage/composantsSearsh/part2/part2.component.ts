import { Component } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {
  center: google.maps.LatLngLiteral = { lat:33.8193879, lng: 10.8448079 }; 
  zoom = 13;
}
