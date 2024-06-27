import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sport-entreprisecomposant1',
  templateUrl: './sport-entreprisecomposant1.component.html',
  styleUrls: ['./sport-entreprisecomposant1.component.css']
})
export class SportEntreprisecomposant1Component implements OnInit {
  public sportEntreprise!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sportEntreprise = this.formBuilder.group({
      Entreprise: this.formBuilder.control('', [
        Validators.required,
      ]),
      Responsable: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      mail: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      telephone: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
      ActivitéSportive: this.formBuilder.control('', Validators.required),
    });
  }
  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    } else if (error['email']) {
      return 'mail invalide';
    } else if (error['min'] || error['max']) {
      return 'Téléphone invalide';
    } else if (error['pattern']) {
      if (fieldName === 'Entreprise' || fieldName === 'Responsable') {
        return fieldName + ' doit contenir uniquement des lettres (a-z, A-Z)';
      } else if (fieldName === 'telephone') {
        return 'Téléphone doit contenir exactement 8 chiffres';
      }
    }
    return '';
  }
  onSubmit() {
    // if (this.contactForm.valid) {
    //   // Handle form submission
    //   console.log('Form Submitted', this.contactForm.value);
    // }
    // console.log(this.contactForm.value)
  }
}
