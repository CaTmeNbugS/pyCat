import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { EstrusPageComponent } from './estrus-page/estrus-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyPageComponent,
    NavigationMenuComponent,
    FavoritePageComponent,
    ShopPageComponent,
    MainPageComponent,
    SettingsPageComponent,
    BasketPageComponent,
    EstrusPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
