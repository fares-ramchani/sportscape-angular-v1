import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './AccueilPage/accueil/accueil.component';
import { CarouselComponent } from './AccueilPage/composantsAccueil/composant_1/carousel/carousel.component';
import { Composant1Component } from './AccueilPage/composantsAccueil/composant_1/composant1/composant1.component';
import { FormulairComponent } from './AccueilPage/composantsAccueil/composant_1/formulair/formulair.component';
import { Composant2Component } from './AccueilPage/composantsAccueil/composant_2/composant2/composant2.component';
import { CarouselActivitesComponent } from './AccueilPage/composantsAccueil/composant_3/carousel-activites/carousel-activites.component';
import { Composant3Component } from './AccueilPage/composantsAccueil/composant_3/composant3/composant3.component';
import { Composant5Component } from './AccueilPage/composantsAccueil/composant_5/composant5/composant5.component';
import { Composant6Component } from './AccueilPage/composantsAccueil/composant_6/composant6/composant6.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ComposantspartenaireComponent } from './AccueilPage/composantsAccueil/composant_6/composantspartenaire/composantspartenaire.component';
import { CarouselevenementsComponent } from './AccueilPage/composantsAccueil/composant_3/carousel-evenements/carouselevenements.component';
import { Composant4Component } from './AccueilPage/composantsAccueil/composant_4/composant4/composant4.component';
import { LoginComponent } from './loginPage/login/login.component';
import { SinupComponent } from './sinupPage/sinup/sinup.component';
import { ContactComponent } from './contactPage/contact/contact.component';
import { SportEntrepriseComponent } from './sportEntreprisePage/sport-entreprise/sport-entreprise.component';
import { SportEntreprisecomposant2Component } from './sportEntreprisePage/sport-entreprisecomposant2/sport-entreprisecomposant2.component';
import { SportEntreprisecomposant1Component } from './sportEntreprisePage/sport-entreprisecomposant1/sport-entreprisecomposant1.component';
import { PartenaireComponent } from './partenairePage/partenaire/partenaire.component';
import { Composant1partenaireComponent } from './partenairePage/composantpartenairePage/composant1partenaire/composant1partenaire.component';
import { Composant2partenaireComponent } from './partenairePage/composantpartenairePage/composant2partenaire/composant2partenaire.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarouselComponent,
    Composant1Component,
    FormulairComponent,
    Composant2Component,
    CarouselActivitesComponent,
    CarouselevenementsComponent,
    Composant3Component,
    Composant4Component,
    Composant5Component,
    Composant6Component,
    NavbarComponent,
    FooterComponent,
    ComposantspartenaireComponent,
    LoginComponent,
    SinupComponent,
    ContactComponent,
    SportEntrepriseComponent,
    SportEntreprisecomposant2Component,
    SportEntreprisecomposant1Component,
    PartenaireComponent,
    Composant1partenaireComponent,
    Composant2partenaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
