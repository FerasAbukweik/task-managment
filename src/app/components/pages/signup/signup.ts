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

  constructor(private _router : Router) {}
  
  inputData : FormGroup = new FormGroup(
    {
      userName : new FormControl("" , [Validators.required]) , 
      email : new FormControl("" , [Validators.required , Validators.email]),
      phone : new FormControl("" , [Validators.required , Validators.minLength(10) , Validators.maxLength(13)]),
      password : new FormControl("" , [Validators.required])
    }
  )


    signup()
  {
    
  if (!this.inputData.valid){
    this.showReqiredUserName = this.inputData.get('userName')?.invalid ?? true;
    this.showReqiredPassword = this.inputData.get('password')?.invalid ?? true;

    let emailInput = this.inputData.get('email');
    if(emailInput?.invalid ?? false)
    {
      if(emailInput?.errors?.['required'] ?? false)
      {
        this.showReqiredEmail = true;
      }
      else
      {
        this.showReqiredEmail = false;
      }
      if(emailInput?.errors?.['email'] ?? false)
      {
        this.showWrongEmail = true;
      }
      else
      {
        this.showWrongEmail = false;
      }
    }
    else
    {
      this.showReqiredEmail = false;
      this.showWrongEmail = false;
    }

    let phoneInput = this.inputData.get('phone');
    if(phoneInput?.invalid ?? false)
    {
      if(phoneInput?.errors?.['required'])
      {
        this.showReqiredPhone = true;
      }
      if((phoneInput?.errors?.['minlength'] ?? false) || (phoneInput?.errors?.['maxlength'] ?? false))
      {
        this.showWrongPhoneNumber = true;
      }
    }
    else
    {
      this.showReqiredPhone = false;
      this.showWrongPhoneNumber = false;
    }

      return;
  }
  this.showWrongPhoneNumber = false;
  this.showWrongEmail = false;
  this.showReqiredPassword = false;
  this.showReqiredPhone = false;
  this.showReqiredEmail = false;
  this.showReqiredUserName = false;



}

  navigateToLogin()
  {
    this._router.navigate(['login']);
  }

}


