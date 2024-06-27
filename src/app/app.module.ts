import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './composants/footer/footer.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { SearshComponent } from './searshPage/searsh/searsh.component';
import { Part1Component } from './searshPage/composantsSearsh/part1/part1.component';
import { Part2Component } from './searshPage/composantsSearsh/part2/part2.component';
import { SearshDetailComponent } from './searshDetailPage/searsh-detail/searsh-detail.component';
import { Section1Component } from './searshDetailPage/composantsSearshDetail/section1/section1.component';
import { Section2Component } from './searshDetailPage/composantsSearshDetail/section2/section2.component';
import { Section3Component } from './searshDetailPage/composantsSearshDetail/section3/section3.component';
import { Etape1Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape1/etape1.component';
import { Etape2Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape2/etape2.component';
import { Etape3Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape3/etape3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearshComponent,
    Part1Component,
    Part2Component,
    SearshDetailComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Etape1Component,
    Etape2Component,
    Etape3Component
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
