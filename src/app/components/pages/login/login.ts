import { Component } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../../message/message';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , Message],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

    constructor(
    private _router : Router) {}

  showReqiredUserName : boolean = false;
  showReqiredPassword : boolean = false;
  showMessage : boolean = false;
  message :string = "";

  
  inputData : FormGroup = new FormGroup(
    {
      userName : new FormControl("" , [Validators.required]) , 
      password : new FormControl("" , [Validators.required])
    }
  )


  login()
  {
    
    if (!this.inputData.valid){
  this.showReqiredUserName = this.inputData.get('userName')?.invalid ?? true;
  this.showReqiredPassword = this.inputData.get('password')?.invalid ?? true;
  return;
   }

      this.showReqiredUserName = false;
      this.showReqiredPassword = false;
      

  }

  navigateToSignUpPage()
  {
    this._router.navigate(['signup'])
  }

}
