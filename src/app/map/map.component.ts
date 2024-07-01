import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [DatePipe]
})
export class MapComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    center: google.maps.LatLngLiteral = { lat:33.8193879, lng: 10.8448079 }; 
    zoom = 13;
  
    initMap(): void {
      const myLatLng = { lat: -25.363, lng: 131.044 };
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: myLatLng,
        zoom: 8
      });
  
      new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
      });
    }

}
