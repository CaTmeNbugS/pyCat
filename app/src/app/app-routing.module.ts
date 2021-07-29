import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { FormComponent } from './form/form.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: '1page'}},
  {path: 'owner', component: UserComponent,canActivate:[AuthGuard], data: {animation: '2page'}},
  {path: 'adform', component: FormComponent, data: {animation: '3page'}},
  {path: 'favorite', component: FavoriteComponent, data: {animation: '4page'}},
  {path: 'settings', component: SettingsComponent, data: {animation: '5page'}},
  {path: 'owner/registration', component: RegComponent, data: {animation: '6page'}},
  {path: 'owner/auth', component: AuthComponent, data: {animation: '7page'}},
  {path: 'buy/:id', component: BuyComponent, data: {animation: '8page'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
