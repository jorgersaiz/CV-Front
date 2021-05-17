import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = 'https://apijorge.com/api/email' 
  constructor(private http: HttpClient) { }

  postEmail (user){

    return this.http.post(this.url, user)
  }
}
