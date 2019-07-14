import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() { }
  profileArray = [];

  registerUser(userProfile) {
   this.profileArray.push(userProfile);
   localStorage.setItem('profileArray', JSON.stringify(this.profileArray));
  }

}
