import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SubuChildComponent} from './subu-child/subu-child.component';

const routes: Routes = [
  {path: 'heroes', component: SubuChildComponent},
  {path: 'actors', redirectTo: 'http://www.google.com'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
