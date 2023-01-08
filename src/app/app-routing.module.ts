import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogueDetailsComponent } from './components/catalogue-details/catalogue-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  // {path: 'signUp' , component: SignUpComponent},
  // {path: 'login' , component: LoginComponent},
  {path: 'signIn' , component: SignInComponent},
  {path: 'home' , component: HomeComponent},
  {path: '' , component: SignInComponent},
  {path: 'product-details/:id' , component: CatalogueDetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
