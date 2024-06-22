import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm!:FormGroup
  constructor( private formBuilder:FormBuilder) { }
  
  
  ngOnInit() {
    this.contactForm=this.formBuilder.group({
      nom:this.formBuilder.control('',Validators.required),
      prenom:this.formBuilder.control('',Validators.required),
      telephone:this.formBuilder.control('',[Validators.required,Validators.max(99999999),Validators.min(10000000)]),
      email:this.formBuilder.control('',[Validators.required,Validators.email]),
      sujet:this.formBuilder.control('',Validators.required),
      message:this.formBuilder.control('',Validators.required)
    })
  }
  getErrorsMessage(arg0: string,error: any):string {
    if(error['required']){
      return arg0+ " obligatoir";
    }else if(error['email']){
      return "email invalid"
    }
    else if(error['min']){
      return  "telephone invalid"
    }
    else if(error['max']){
      return  "telephone invalid"
    }
    else return "";
    
  
  }


}
