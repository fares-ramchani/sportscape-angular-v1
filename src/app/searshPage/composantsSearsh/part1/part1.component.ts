import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
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
