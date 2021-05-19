import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  public menu: any[] = [

    { titulo: 'Experiencia Laboral', url: 'experiencias'},
    { titulo: 'Estudios', url: 'estudios'},
    { titulo: 'Tecnologías', url: 'tecnologias'},
    { titulo: 'Proyectos', url: 'proyectos'},
    { titulo: 'Ajustes', url: 'account-settings'}
      
    
  ]
  constructor() { }
}
