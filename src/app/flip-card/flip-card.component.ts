import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  metaData: Array<any>;
  data: any;

  @Output() showDetail: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    this.metaData = [
      {
        front: {
           first: "Match 21",
           second: "IPL 2021",
           third: "CSK vs MI"
        },
        right: {
          url: "assets/images/logo2.jpg",
        },
        back: {
          first: "10",
          second: "over",
        },
        left: {
          first: "CSK",
          second: "81-3",
        }
      },
      {
        front: {
           first: "Match 22",
           second: "IPL 2021",
           third: "KKR vs PBKS"
        },
        right: {
          url: "assets/images/logo2.jpg",
        },
        back: {
          first: "6",
          second: "over",
        },
        left: {
          first: "PBKS",
          second: "75-1",
        }
      },
      {
        front: {
           first: "Match 23",
           second: "IPL 2021",
           third: "RR vs SRH"
        },
        right: {
          url: "assets/images/logo2.jpg",
        },
        back: {
          first: "18",
          second: "over",
        },
        left: {
          first: "RR",
          second: "191-2",
        }
      },
      {
        front: {
           first: "Match 24",
           second: "IPL 2021",
           third: "RCB vs DC"
        },
        right: {
          url: "assets/images/logo2.jpg",
        },
        back: {
          first: "15",
          second: "over",
        },
        left: {
          first: "RCB",
          second: "203-1",
        }
      }
    ]
  }

  ngOnInit(): void {
    let index = 0;
    this.data = this.metaData[index];
    setInterval(() => {
      index++
      if(index > (this.metaData.length - 1)){
        index = 0;
      }
      this.data = this.metaData[index];
    }, 6000)
  }

  openModal(){
    this.showDetail.emit(this.data);
  }

}
