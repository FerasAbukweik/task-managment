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
}
