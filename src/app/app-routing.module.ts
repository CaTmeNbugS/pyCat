import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EstrusPageComponent } from './estrus-page/estrus-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { BuyCatPageComponent } from './buy-cat-page/buy-cat-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { PersonalAreaPageComponent } from './personal-area-page/personal-area-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdFormComponent } from './ad-form/ad-form.component';


const routes: Routes = [
  {path: '', component: MainPageComponent, data: {animation: '1page'}},
  {path: 'owner', component: PersonalAreaPageComponent, data: {animation: '2page'}},
  {path: 'adform', component: AdFormComponent, data: {animation: '3page'}},
  {path: 'buy', component: BuyPageComponent, data: {animation: '4page'}},
  {path: 'estrus', component: EstrusPageComponent, data: {animation: '5page'}},
  {path: 'favorite', component: FavoritePageComponent, data: {animation: '6page'}},
  {path: 'settings', component: SettingsPageComponent, data: {animation: '7page'}},
  {path: 'registration', component: RegPageComponent, data: {animation: '8page'}},
  {path: 'login', component: LoginPageComponent, data: {animation: '9page'}},
  {path: 'buy/:id', component: BuyCatPageComponent, data: {animation: '10page'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
