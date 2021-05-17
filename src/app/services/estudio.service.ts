import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private url = 'https://jorgeapi.com/api/estudios' 
  constructor(private http: HttpClient) { }

  getEstudios (){

    return this.http.get(`${this.url}?id=609a65854f0c170b744967bd`)
  }
}
