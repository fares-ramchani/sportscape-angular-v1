import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component {
  center: google.maps.LatLngLiteral = { lat:33.8193879, lng: 10.8448079 }; 
  zoom = 13;
  constructor(private router:Router){}
  reserver(){
    this.router.navigateByUrl('/search/detail')
  }

 
}
