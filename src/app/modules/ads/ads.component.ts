import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AdConfigService} from '../../services/ad-config.service'

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  modalData: any[];
  opened: boolean;

  constructor(private ads: AdConfigService) {
   }

  ngOnInit(): void {
    this.loadAd1();
    setTimeout(() => {
      this.loadAd2();  
    }, 5000);
  }

  loadAd1(){
    let adWrap = document.querySelector('#adContainer1');
    adWrap.innerHTML = this.ads.getAdConfigHTML1();
    let close = document.querySelector('#close1');
    close.addEventListener('click', function () {
      adWrap.setAttribute('style', 'display: none');
    })

    setTimeout(() => {
      this.loadAd3();
    }, 3000);
  }

  loadAd2(){
    let adWrap = document.querySelector('#adContainer2');
    adWrap.innerHTML = this.ads.getAdConfigHTML2(); 
    let close = document.querySelector('#close2');
    close.addEventListener('click', function () {
      adWrap.setAttribute('style', 'display: none');
    })

    setTimeout(() => {
      this.loadAd4();
    }, 7000);
  }

  loadAd3(){
    let adWrap = document.querySelector('#adContainer3');
    adWrap.setAttribute('style', 'display: block')
    let close = document.querySelector('#close3');
    close.addEventListener('click', function () {
      adWrap.setAttribute('style', 'display: none');
    })
  }

  loadAd4(){
    let adWrap = document.querySelector('#adContainer4');
    adWrap.innerHTML = this.ads.getAdConfigHTML4(); 
    let close = document.querySelector('#close4');
    close.addEventListener('click', function () {
      adWrap.setAttribute('style', 'display: none');
    })
  }

  openModal(data){
    this.modalData = data;
    this.opened = true;
  }

  onModalClose(e){
    if(e){
      this.opened = false;
    }
  }
}
