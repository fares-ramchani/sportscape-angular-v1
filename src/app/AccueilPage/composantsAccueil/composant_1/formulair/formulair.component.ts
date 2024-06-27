import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulair',
  templateUrl: './formulair.component.html',
  styleUrls: ['./formulair.component.css']
})
export class FormulairComponent implements OnInit {
  public formulaireaccueilForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulaireaccueilForm = this.formBuilder.group({
      Gouvernorat: this.formBuilder.control('', [
        Validators.required,
      ]),
      Activite: this.formBuilder.control('', [
        Validators.required,
      ]),
     
    });
  }
  getErrorsMessage(fieldName: string, error: any): string {
    if (error['required']) {
      return fieldName + ' obligatoire';
    }
    return '';
  }
}
