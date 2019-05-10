import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from'./carousel/carousel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SidebarModule } from 'ng-sidebar';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatChipsModule } from '@angular/material/chips';
import { FooterComponent } from  './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    SidebarModule.forRoot(),
    SlideshowModule,
    MatChipsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
