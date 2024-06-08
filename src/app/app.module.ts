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
    ComposantspartenaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
