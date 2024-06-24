import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { LoginComponent } from './loginPage/login/login.component';
import { SinupComponent } from './sinupPage/sinup/sinup.component';
import { ContactComponent } from './contactPage/contact/contact.component';
import { SportEntrepriseComponent } from './sportEntreprisePage/sport-entreprise/sport-entreprise.component';
import { Composant1partenaireComponent } from './partenairePage/composantpartenairePage/composant1partenaire/composant1partenaire.component';
import { PartenaireComponent } from './partenairePage/partenaire/partenaire.component';
import { AccueilComponent } from './AccueilPage/accueil/accueil.component';

const routes: Routes = [
  {path :"sportEntreprise" ,component:SportEntrepriseComponent},
  {path :"accueil" ,component:AccueilComponent},
  {path :"contact" ,component:ContactComponent},
  {path :"login" ,component:LoginComponent},
  {path :"sinup" ,component:SinupComponent},
  {path :"partenaire" ,component:PartenaireComponent},
  {path :"" ,component:PartenaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
