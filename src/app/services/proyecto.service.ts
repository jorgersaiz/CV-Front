import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private url = 'https://jorgeapi.com/api/proyectos' 
  constructor(private http: HttpClient) { }

  getProyectos (){

    return this.http.get(`${this.url}?id=609a65854f0c170b744967bd`)
  }
}
