import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    TecnologiasComponent,
    ExperienciasComponent,
    EstudiosComponent,
    ProyectosComponent
    
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
