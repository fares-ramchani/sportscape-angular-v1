import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearshComponent } from './searshPage/searsh/searsh.component';
import { SearshDetailComponent } from './searshDetailPage/searsh-detail/searsh-detail.component';
import { Etape1Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape1/etape1.component';
import { Etape2Component } from './searshDetailPage/composantsSearshDetail/lesEtapes/etape2/etape2.component';

const routes: Routes = [
  {path:'search/list',component:SearshComponent},
  {path:'search/detail',component:SearshDetailComponent},
  {path:'etapes',component:Etape1Component},
  {path:'etape2',component:Etape2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
