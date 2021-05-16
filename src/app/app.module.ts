import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdsComponent } from './modules/ads/ads.component';
import { AdOneComponent } from './adsComponents/ad-one/ad-one.component';
import { AdTwoComponent } from './adsComponents/ad-two/ad-two.component';
import { AdThreeComponent } from './adsComponents/ad-three/ad-three.component';
import { AdFourComponent } from './adsComponents/ad-four/ad-four.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdsComponent,
    AdOneComponent,
    AdTwoComponent,
    AdThreeComponent,
    AdFourComponent,
    FlipCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
