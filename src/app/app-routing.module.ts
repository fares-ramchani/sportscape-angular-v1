import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { LoginComponent } from './loginPage/login/login.component';
import { SinupComponent } from './sinupPage/sinup/sinup.component';
import { ContactComponent } from './contactPage/contact/contact.component';

const routes: Routes = [
  {path :"" ,component:ContactComponent},
  {path :"login" ,component:LoginComponent},
  {path :"sinup" ,component:SinupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
