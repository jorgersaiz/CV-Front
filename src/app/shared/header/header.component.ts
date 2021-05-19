import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { EmailService } from 'src/app/services/email.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css'
  ]
})
export class HeaderComponent implements OnInit {

  lang: String
  usuario: Usuario
  obj: object
  constructor(private usuarioService: UsuarioService, private emailService: EmailService) {
    this.getUsuario()
  }

  getUsuario(){
    this.usuarioService.getUsuario().subscribe( (data: any) => {
      this.usuario = data.usuario
    })
  }

  marcar(lang){

    this.lang = lang
    if(lang == "English" ){

      let spa = document.getElementById("spa") as HTMLInputElement
      spa.checked = false
      
    } else {
      
      let eng = document.getElementById("eng") as HTMLInputElement
      eng.checked = false

    }

  }

  onSub(email, name){

    this.obj = {
      email: email,
      name: name,
      lang: this.lang
    }

    console.log(this.obj);
    
    this.emailService.postEmail(this.obj).subscribe( ( data ) =>{
      console.log(data);
      this.obj = null
      
    })
    
  }

  ngOnInit(): void {
  }

}
