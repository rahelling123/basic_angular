import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogListComponent } from './dog-list/dog-list.component'

const routes: Routes = [
  { path: 'doglist', component: DogListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
