import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyPageComponent } from './buy-page/buy-page.component';

const routes: Routes = [
  {path: '', component: BuyPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
