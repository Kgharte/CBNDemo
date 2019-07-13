import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    
  constructor(private router: Router) { }

  ngOnInit() {
  }
applicationname: string;
applicationid: string;
password: string;
  
register() {

  if(this.applicationid=='1' && this.applicationname == 'dhiraj@gmail.com' && this.password == 'password') {
  
  this.router.navigate(['user']);
  
  }else {
  
  alert("Invalid credentials.")
  
  }
  
  }

}
