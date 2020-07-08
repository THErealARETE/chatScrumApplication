import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', component: HomepageComponent},
  {path : 'home', component:HomepageComponent},
  {path : 'login', component:LoginComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'scrumboard/:project_id', component:ScrumboardComponent, canActivate: [AuthGuard]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
