import { Component, OnInit,EventEmitter } from '@angular/core';
import { SwiperOptions } from 'swiper';
// import { MaterializeAction } from 'angular2-materialize';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  items: Array<any> = [];
  title = 'CBN';
  constructor() { 
    this.items = [
      {name: 'assets/img/3.jpg'},
      {name: 'assets/img/4.jpg'},
      {name: 'assets/img/5.jpg'},
      {name: 'assets/img/6.jpg'},
      {name: 'assets/img/7.jpg'},
    ];
  }
 
  openDialog(): void {
   
  }
  ngOnInit(): void {
   
  }

  
  
}
