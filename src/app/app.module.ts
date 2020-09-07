import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatChipsModule } from '@angular/material/chips';
import { FooterComponent } from  './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    SlideshowModule,
    MatChipsModule,
    MatSidenavModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
