import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../../message/message';

@Component({
  selector: 'app-signup',
  imports: [Message , ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  showReqiredUserName : boolean = false;
  showReqiredEmail : boolean = false;
  showReqiredPhone : boolean = false;
  showReqiredPassword : boolean = false;
  showWrongEmail : boolean = false;
  showWrongPhoneNumber : boolean = false;
  showMessage : boolean = false;
  message :string = "";

  
  inputData : FormGroup = new FormGroup(
    {
      userName : new FormControl("" , [Validators.required]) , 
      email : new FormControl("" , [Validators.required , Validators.email]),
      phone : new FormControl("" , [Validators.required , Validators.minLength(10) , Validators.maxLength(13)]),
      password : new FormControl("" , [Validators.required])
    }
  )

}


