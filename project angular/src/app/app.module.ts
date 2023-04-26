import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RequestComponent } from './request/request.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DestinationsComponent,
    ReviewComponent,
    LoginComponent,
    SignupComponent,
    RequestComponent,
    ContactsComponent,
    DestinationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
