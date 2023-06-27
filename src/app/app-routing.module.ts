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
  },
  {
    path:'',
    redirectTo : 'auth',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
