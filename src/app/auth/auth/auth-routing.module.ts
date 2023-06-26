import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LoginComponent, RegisterComponent } from '../pages';

const routes: Routes = [
  //localhost:4200/auth
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'layout',
        component: LayoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
