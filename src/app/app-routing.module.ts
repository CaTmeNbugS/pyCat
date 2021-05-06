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


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'buy', component: BuyPageComponent},
  {path: 'estrus', component: EstrusPageComponent},
  {path: 'favorite', component: FavoritePageComponent},
  {path: 'settings', component: SettingsPageComponent},
  {path: 'registration', component: RegPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'owner', component: PersonalAreaPageComponent},
  {path: 'buy/:id', component: BuyCatPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
