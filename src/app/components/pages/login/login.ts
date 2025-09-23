import { Component } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../../shared-components/message/message';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , Message],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

    constructor(
    private _router : Router) {}


    // if true show message 
    showReqiredUserName : boolean = false;
    showReqiredPassword : boolean = false;
    showMessage : boolean = false;
    //
    // what to show in error message
    message :string = "";

    //input data
    inputData : FormGroup = new FormGroup(
      {
        userName : new FormControl("" , [Validators.required]) , 
        password : new FormControl("" , [Validators.required])
      }
    )


    //if clicked login button
  login()
  {
    //return show errors to default values
      this.showReqiredUserName = false;
      this.showReqiredPassword = false;
    
    if (!this.inputData.valid){
    this.showReqiredUserName = this.inputData.get('userName')?.invalid ?? true;
    this.showReqiredPassword = this.inputData.get('password')?.invalid ?? true;

    //stop here if input is not valid
  return;
   }


      // continue log in code here -------------------

  }


  //if clicked signup
  navigateToSignUpPage()
  {
    this._router.navigate(['signup'])
  }

}
