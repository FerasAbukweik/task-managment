import { Routes } from '@angular/router';
import { MainPage } from './components/pages/main-page/main-page';
import { Login } from './components/pages/login/login';
import { Signup } from './components/pages/signup/signup';
export const routes: Routes = [
    {path : "" , redirectTo : "/mainPage" , pathMatch : "full"},
    {path : "mainPage" , component : MainPage},
    {path : "login" , component : Login},
    {path : "signup" , component : Signup},
];
