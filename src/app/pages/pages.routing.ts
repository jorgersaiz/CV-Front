import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [

    { 
        
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data: {titulo : "Resumen"}},  
          { path: 'account-settings', component: AccountSettingsComponent, data: {titulo : "Account-Settings"}},
          { path: 'tecnologias', component: TecnologiasComponent, data: {titulo : "Tecnologías"}},
          { path: 'experiencias', component: ExperienciasComponent, data: {titulo : "Experiencia Laboral"}},
          { path: 'estudios', component: EstudiosComponent, data: {titulo : "Estudios"}},
          { path: 'proyectos', component: ProyectosComponent, data: {titulo : "Proyectos"}}
    
        ] 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

// Acordarse de cambiar nombre de la clase de abajo
export class PagesRoutingModule {} 
