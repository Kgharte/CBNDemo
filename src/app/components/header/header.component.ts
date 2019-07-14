import { Component, OnInit,EventEmitter } from '@angular/core';
// import { MaterializeAction } from 'angular2-materialize';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  title = 'CBN';
  constructor() { }

  ngOnInit() {
  }
  openDialog(): void {
   
  }

  // carouselActions = new EventEmitter<string|MaterializeAction>();

  // prev(){
  //   console.log(this.carouselActions);  
  // }
  // next(){
  //    this.carouselActions.emit({action:"carousel",params:['next']});
  // }
  
}
