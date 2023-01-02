import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SearchComponent } from './components/search/search.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    SignInComponent,
    SearchComponent,
    ListOfProductsComponent,
    CatalogueComponent,
    ProductDetailsComponent,
    ComparisonComponent,
    ProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
