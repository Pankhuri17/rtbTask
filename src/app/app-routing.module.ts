import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './modules/ads/ads.component';

const routes: Routes = [
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  { path: 'ads', component: AdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
