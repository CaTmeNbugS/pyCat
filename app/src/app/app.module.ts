import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { BuyBlockComponent } from './buy-block/buy-block.component';
import { FormComponent } from './form/form.component';
import { SettingsComponent } from './settings/settings.component';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegComponent,
    AuthComponent,
    FavoriteComponent,
    HomeComponent,
    BuyComponent,
    BuyBlockComponent,
    FormComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
