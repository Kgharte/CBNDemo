import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
// Material Section
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule, MatFormFieldModule } from '@angular/material';
import { MatSidenavModule,
         MatToolbarModule,
         MatSelectModule, MatSpinner  } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { DashboardDataService } from './shared/dashboard-data.service';



@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    Angular2UsefulSwiperModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule

  ],

  providers: [DashboardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
