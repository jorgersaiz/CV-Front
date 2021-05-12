import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url = 'http://localhost:3000/api/experiencias' 
  constructor(private http: HttpClient) { }

  getExperiencia (){

    return this.http.get(`${this.url}?id=609a65854f0c170b744967bd`)
  }
}
