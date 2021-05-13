import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private url = 'http://localhost:3000/api/tecnologias' 
  constructor(private http: HttpClient) { }

  getTecnologias (){

    return this.http.get(`${this.url}?id=609a65854f0c170b744967bd`)
  }
}
