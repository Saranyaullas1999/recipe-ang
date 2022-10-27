import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipeComponent } from './recipe/recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewmyRecipeComponent } from './viewmy-recipe/viewmy-recipe.component'

const appRoutes:Routes=[
  {
    path:"",component:SigninComponent
  },
  {
    path:"signup",component:SignupComponent

  },
  {
    path:"recipe",component:RecipeComponent
  },
  {
    path:"view",component:ViewmyRecipeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    RecipeComponent,
    NavbarComponent,
    ViewmyRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
