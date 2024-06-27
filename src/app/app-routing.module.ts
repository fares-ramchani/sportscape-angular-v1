import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './AccueilPage/accueil/accueil.component';
import { ContactComponent } from './contactPage/contact/contact.component';
import { LoginComponent } from './loginPage/login/login.component';
import { PartenaireComponent } from './partenairePage/partenaire/partenaire.component';
import { Etape1Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape1/etape1.component';
import { SearshDetailComponent } from './searshDetailPage/searsh-detail/searsh-detail.component';
import { SearshComponent } from './searshPage/searsh/searsh.component';
import { SinupComponent } from './sinupPage/sinup/sinup.component';
import { SportEntrepriseComponent } from './sportEntreprisePage/sport-entreprise/sport-entreprise.component';
import { Etape3Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape3/etape3.component';

const routes: Routes = [
  { path: 'sportEntreprise', component: SportEntrepriseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sinup', component: SinupComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'search/list', component: SearshComponent },
  { path: 'c', component: SearshDetailComponent },
  { path: 'etapes', component: Etape1Component },
  { path: 'etape3', component: Etape3Component },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
