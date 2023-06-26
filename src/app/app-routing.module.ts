import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //rutas madres
  {
    path: 'auth',
    loadChildren: () => import('./auth').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'itr',
    loadChildren: () => import('./itr').then((m) => m.ItrRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
