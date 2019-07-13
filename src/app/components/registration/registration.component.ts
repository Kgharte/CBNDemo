import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerUser(regForm:NgForm){  
    
    console.log(regForm.value);  

  }  

}
