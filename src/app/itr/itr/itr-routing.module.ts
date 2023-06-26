import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignadorComponent, CoachComponent, DepartamentoComponent, EntrevistadorComponent, InicioComponent, LayoutPageComponent, RecursoComponent, RrhhComponent } from '../pages';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'asignador',
        component: AsignadorComponent,
      },
      {
        path: 'coach',
        component: CoachComponent,
      },
      {
        path: 'departamento',
        component: DepartamentoComponent,
      },
      {
        path: 'entrevistador',
        component: EntrevistadorComponent,
      },
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'layout-page',
        component: LayoutPageComponent,
      },
      {
        path: 'recurso',
        component: RecursoComponent,
      },
      {
        path: 'rrhh',
        component: RrhhComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItrRoutingModule { }
