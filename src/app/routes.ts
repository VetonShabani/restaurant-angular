import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MenuComponent } from './menu/menu.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './login/register';
// import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactFormComponent },
    // { path: 'login', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'home'}
];
