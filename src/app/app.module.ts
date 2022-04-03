import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from "../environments/environment";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import {AngularFireModule} from '@angular/fire/compat';
import { CarlistComponent } from './carlist/carlist.component';
import { CarComponent } from './car/car.component';

import { HttpClientModule } from "@angular/common/http";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { collection, addDoc } from "firebase/firestore";

@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
