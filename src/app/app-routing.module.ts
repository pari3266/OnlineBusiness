import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  // {path: 'signUp' , component: SignUpComponent},
  // {path: 'login' , component: LoginComponent},
  {path: 'signIn' , component: SignInComponent},
  {path: 'home' , component: HomeComponent},
  {path: '' , component: SignInComponent},
  {path: '**', redirectTo: 'signIn'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
