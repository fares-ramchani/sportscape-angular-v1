import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-etape3',
  templateUrl: './etape3.component.html',
  styleUrls: ['./etape3.component.css']
})
export class Etape3Component implements OnInit {
  public etape3Form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.etape3Form = this.formBuilder.group({
      numero: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$'),
      ]),
    });
  }
  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    } else if (error['min'] || error['max']) {
      return 'Téléphone invalide';
    } else if (fieldName === 'numero') {
      return 'Téléphone doit contenir exactement 8 chiffres';
    }
    return '';
  }
  showPromoCodeInput = false;

  showPromoCode() {
    this.showPromoCodeInput = !this.showPromoCodeInput;
  }

  currentSection: string = 'etape3';

  navigateTo(section: string) {
    this.currentSection = section;
  }
  verif:boolean=false
  descrip(){
    this.verif=!this.verif
  }
}