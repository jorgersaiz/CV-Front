import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://jorgeapi.com/api/usuarios'
  constructor(private http: HttpClient) { }

  getUsuario (){
    
    return this.http.get(`${this.url}?id=609a65854f0c170b744967bd`)
  }
}
