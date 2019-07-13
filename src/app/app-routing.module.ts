import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [

  {
    path: 'signup', component: RegistrationComponent,  data: { animation: 'signup' }
  },
  {
    path: '', component: LoginComponent,  data: { animation: 'login' }
  },
  {
    path: 'header', component: HeaderComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }