import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../../shared-components/message/message';

@Component({
  selector: 'app-signup',
  imports: [Message , ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  constructor(private _router : Router) {}


  //show Reqired User Name under its input and make boarder color red
  showReqiredUserName : boolean = false;
  //show Reqired Email under its input and make boarder color red
  showReqiredEmail : boolean = false;
  //show Reqired Phone under its input and make boarder color red
  showReqiredPhone : boolean = false;
  //show Reqired Password under its input and make boarder color red
  showReqiredPassword : boolean = false;
  //show WrongEmail under its input and make boarder color red
  showWrongEmail : boolean = false;
  //show Wrong Phone Number under its input and make boarder color red
  showWrongPhoneNumber : boolean = false;
  //if true show error message
  showMessage : boolean = false;
  //error message to show
  message :string = "";

  // input data from user
  inputData : FormGroup = new FormGroup(
    {
      userName : new FormControl("" , [Validators.required]) , 
      email : new FormControl("" , [Validators.required , Validators.email]),
      phone : new FormControl("" , [Validators.required , Validators.minLength(10) , Validators.maxLength(13)]),
      password : new FormControl("" , [Validators.required])
    }
  )



  //if clicked signup
    signup()
  {

    //return show error messages to default state 
    this.showWrongPhoneNumber = false;
    this.showWrongEmail = false;
    this.showReqiredPassword = false;
    this.showReqiredPhone = false;
    this.showReqiredEmail = false;
    this.showReqiredUserName = false;
    


    //check if all input is valid
    if (!this.inputData.valid){
      //check username input
    this.showReqiredUserName = this.inputData.get('userName')?.invalid ?? true;
      //check password input
    this.showReqiredPassword = this.inputData.get('password')?.invalid ?? true;

    //check email input
    let emailInput = this.inputData.get('email');
    if(emailInput?.invalid ?? false)
    {
      if(emailInput?.errors?.['required'] ?? false)
      {
        this.showReqiredEmail = true;
      }
      //if it is types the check if its corrent email
      else
      {
        if(emailInput?.errors?.['email'] ?? false)
          {
            this.showWrongEmail = true;
          }
      }
    }
    //if input is valid remove reqired messages

    //check phone input
    let phoneInput = this.inputData.get('phone');
    if(phoneInput?.invalid ?? false)
    {
      if(phoneInput?.errors?.['required'])
      {
        this.showReqiredPhone = true;
      }
      //if it is types the check if its corrent phone number
      else
      {
        if((phoneInput?.errors?.['minlength'] ?? false) || (phoneInput?.errors?.['maxlength'] ?? false))
          {
            this.showWrongPhoneNumber = true;
          }
      }
    }


    // stop code if something is not valid
      return;
  }


 // continue signup code here -------------------

}


// if clicked login go to login page
  navigateToLogin()
  {
    this._router.navigate(['login']);
  }

}


