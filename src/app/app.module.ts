import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule  } from '@angular/core';
=======
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
>>>>>>> 3925af6d21798160255bbc13c7f7f0ecee63cff8
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// Material Section
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule, MatFormFieldModule, MatInputModule, } from '@angular/material';
import { MatSidenavModule, 
         MatToolbarModule,
         MatSelectModule,MatSpinner  } from '@angular/material';
         import { MatCardModule } from '@angular/material';         
import { MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
=======
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
>>>>>>> 3925af6d21798160255bbc13c7f7f0ecee63cff8


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
<<<<<<< HEAD
    MatButtonModule, 
    MatCardModule,
    
=======
    MatButtonModule,
>>>>>>> 3925af6d21798160255bbc13c7f7f0ecee63cff8
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
<<<<<<< HEAD
    MatSelectModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
=======
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule
>>>>>>> 3925af6d21798160255bbc13c7f7f0ecee63cff8
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
