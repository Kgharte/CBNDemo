import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  isHeading = true;
  isSubheading = true;
  isHeadingBtn = true;

  slides = [];
  constructor() {
    this.slides = [
      {name: '../../assets/img/4.jpg'},
      {name: '../../assets/img/5.jpg'},
      {name: '../../assets/img/6.jpg'},
      {name: '../../assets/img/7.jpg'},
      {name: '../../assets/img/3.jpg'},
    ];
   }

  ngOnInit() {
  }

}
