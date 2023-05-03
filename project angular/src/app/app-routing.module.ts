import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReviewComponent } from './review/review.component';
import { RequestComponent } from './request/request.component';
import { ContactsComponent } from './contacts/contacts.component';
import {DestinationDetailComponent} from "./destination-detail/destination-detail.component";
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'request', component: RequestComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'destinations/:id', component: DestinationDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
