import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      nom: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      prenom: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      telephone: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      sujet: this.formBuilder.control('', Validators.required),
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
      if (fieldName === 'nom' || fieldName === 'prenom') {
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
