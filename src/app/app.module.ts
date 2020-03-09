import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import {Form} from '@angular/forms'
// import { FormBuilder } from '@angular/forms';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './login/_helpers';

// import { appRoutingModule } from './app.routing';
// import { JwtInterceptor, ErrorInterceptor } from './login/_helpers';
// import { AppComponent } from './/app.component';
// import { HomeComponent } from './login/home';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './login/register';
import { AlertComponent } from './login/_components';
import { fakeBackendProvider } from './login/_helpers/fake-backend';
import { JwtInterceptor, ErrorInterceptor } from './login/_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactFormComponent,
    AboutPageComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    // FormBuilder
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
