import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearshComponent } from './searshPage/searsh/searsh.component';
import { SearshDetailComponent } from './searshDetailPage/searsh-detail/searsh-detail.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'search/list',component:SearshComponent},
  {path:'search/detail',component:SearshDetailComponent},
  {path:'map',component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
