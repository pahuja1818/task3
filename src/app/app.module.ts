import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PreferenceComponent } from './preference/preference.component';
import { Route } from '@angular/compiler/src/core';

const appRoutes:Routes=[
  { path :'', component:FormComponent },
  { path :'preference', component:PreferenceComponent }

] 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PreferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
