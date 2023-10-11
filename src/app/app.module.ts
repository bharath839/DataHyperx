import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SpecificIteamComponent } from './specific-iteam/specific-iteam.component';
import { GamersPageComponent } from './gamers-page/gamers-page.component';
import { SpecificGamerComponent } from './specific-gamer/specific-gamer.component';



@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    NavBarComponent,
    CartComponent,
    HomeComponent,
    SpecificIteamComponent,
    GamersPageComponent,
    SpecificGamerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
