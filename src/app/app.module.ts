import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { LayoutComponent } from './auth/pages/layout/layout.component';
import { LayoutPageComponent } from './itr/pages/layout-page/layout-page.component';
import { InicioComponent } from './itr/pages/inicio/inicio.component';
import { EntrevistadorComponent } from './itr/pages/entrevistador/entrevistador.component';
import { AsignadorComponent } from './itr/pages/asignador/asignador.component';
import { CoachComponent } from './itr/pages/coach/coach.component';
import { RrhhComponent } from './itr/pages/rrhh/rrhh.component';
import { DepartamentoComponent } from './itr/pages/departamento/departamento.component';
import { RecursoComponent } from './itr/pages/recurso/recurso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';

//standalone components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    LayoutPageComponent,
    InicioComponent,
    EntrevistadorComponent,
    AsignadorComponent,
    CoachComponent,
    RrhhComponent,
    DepartamentoComponent,
    RecursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
