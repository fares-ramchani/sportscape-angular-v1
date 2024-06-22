import { Component } from '@angular/core';

@Component({
  selector: 'app-composant1partenaire',
  templateUrl: './composant1partenaire.component.html',
  styleUrls: ['./composant1partenaire.component.css']
})
export class Composant1partenaireComponent {
  Latitude:any
  Longtitude:any
  display: any;
  constructor() {}
    ngOnInit() {
      
    }
   
    center: google.maps.LatLngLiteral = {
        lat: 34,
        lng: 10
    };
    zoom = 5.5;
    // 33,91208974667019 moveMap(event: google.maps.MapMouseEvent) {
    //     if (event.latLng != null) this.center = (event.latLng.toJSON());
    // }
    // move(event: google.maps.MapMouseEvent) {
    //     if (event.latLng != null) this.display = event.latLng.toJSON();
    // }
    markerOption:google.maps.MarkerOptions={
      draggable:false
    }
    markerPosition!:google.maps.LatLngLiteral

    addMarker(event: google.maps.MapMouseEvent){
      if (event.latLng != null){
        this.markerPosition=event.latLng.toJSON()
        this.display = event.latLng.toJSON()
        this.Latitude=this.display?.lat
        this.Longtitude=this.display?.lng

      } ;
    }
}


