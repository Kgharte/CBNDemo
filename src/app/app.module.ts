import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
//Material Section
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import  {MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule, MatFormFieldModule, MatInputModule, } from '@angular/material';
import { MatSidenavModule, 
         MatToolbarModule,
         MatSelectModule,MatSpinner  } from '@angular/material';
         import { MatCardModule } from '@angular/material';         
import { MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule,
    
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
