import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-composant1partenaire',
  templateUrl: './composant1partenaire.component.html',
  styleUrls: ['./composant1partenaire.component.css'],
})
export class Composant1partenaireComponent implements OnInit {
  public partenaireForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.partenaireForm = this.formBuilder.group({
      nom: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      code: this.formBuilder.control('', [
        Validators.required,
      ]),
      ville: this.formBuilder.control('', [
        Validators.required,
      ]),
      Adresse: this.formBuilder.control('', [
        Validators.required,
      ]),
      activite: this.formBuilder.control('', [
        Validators.required,
      ]),
      nombremax: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{2}$'),
      ]),
      telephone: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
      mail: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }
  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    } else if (error['email']) {
      return 'Email invalide';
    } else if (error['min'] || error['max']) {
      return 'Téléphone invalide';
    } else if (error['pattern']) {
      if (fieldName === 'nom') {
        return fieldName + ' doit contenir uniquement des lettres (a-z, A-Z)';
      } else if (fieldName === 'telephone') {
        return 'Téléphone doit contenir exactement 8 chiffres';
      } else if (fieldName === 'nombremax') {
        return 'max 2 chiffre';
      }
      
    }
    return '';
  }
  Latitude: any;
  Longtitude: any;
  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 34,
    lng: 10,
  };
  zoom = 5.5;
  // 33,91208974667019 moveMap(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.center = (event.latLng.toJSON());
  // }
  // move(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
  markerOption: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPosition!: google.maps.LatLngLiteral;

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.markerPosition = event.latLng.toJSON();
      this.display = event.latLng.toJSON();
      this.Latitude = this.display?.lat;
      this.Longtitude = this.display?.lng;
    }
  }
}
