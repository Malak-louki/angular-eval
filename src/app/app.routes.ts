import { Routes } from '@angular/router';
import { RegisterView } from './pages/register-view/register-view';
import { HomeView } from './pages/home-view/home-view';
import { LoginView } from './pages/login-view/login-view';

export const routes: Routes = [
    {path:'', component:HomeView},
    {path:'register' , component:RegisterView},
    {path:'login', component:LoginView}
];
