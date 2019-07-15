import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { DashboardDataService } from 'src/app/shared/dashboard-data.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private regService: DashboardDataService) { }

  ngOnInit() {
  }

  onSubmit(regForm: NgForm) {
    const applicationid = regForm.value.applicationid;
    console.log(applicationid.value);
    const ApplicationName = regForm.value.ApplicationName;
    const applicationType = regForm.value.applicationType;
    const AppOwner = regForm.value.AppOwner;
    const localao = regForm.value.localao;
    const appDelOwner = regForm.value.appDelOwner;
    const defSolAdmin = regForm.value.defSolAdmin;
    const lsa = regForm.value.lsa;
    const CBNType = regForm.value.CBNType;

    const profileObject = {
      applicationid,
      ApplicationName,
      applicationType,
      AppOwner,
      localao,
      appDelOwner,
      defSolAdmin,
      lsa,
      CBNType
    };

    this.regService.registerUser(profileObject);
  }

}
