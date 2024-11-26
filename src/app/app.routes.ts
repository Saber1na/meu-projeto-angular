import {  Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from '../../src/app/paginas/home.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },

];


