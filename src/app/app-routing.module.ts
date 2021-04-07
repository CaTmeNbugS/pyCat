import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';


const routes: Routes = [
  {path: '', component: BuyPageComponent},
  {path: 'favorite', component: FavoritePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
