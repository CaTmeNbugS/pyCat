import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { EstrusPageComponent } from './estrus-page/estrus-page.component';
import { PersonalAreaPageComponent } from './personal-area-page/personal-area-page.component';
import { BuyCatPageComponent } from './buy-cat-page/buy-cat-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BuyBlockComponent } from './buy-block/buy-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BuyPageComponent,
    FavoritePageComponent,
    MainPageComponent,
    SettingsPageComponent,
    EstrusPageComponent,
    PersonalAreaPageComponent,
    BuyCatPageComponent,
    RegPageComponent,
    LoginPageComponent,
    BuyBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
