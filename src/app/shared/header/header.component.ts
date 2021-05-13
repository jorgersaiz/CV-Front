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

  correo: boolean = false
  usuario: Usuario
  constructor(private usuarioService: UsuarioService, private emailService: EmailService) {
    this.getUsuario()
  }

  getUsuario(){
    this.usuarioService.getUsuario().subscribe( (data: any) => {
      this.usuario = data.usuario
    })
  }

  onSub(email, name){

    let obj = {
      email: email,
      name: name
    }
    this.emailService.postEmail(obj).subscribe( ( data ) =>{
      console.log(data);
      this.correo = true
      
    })
    
  }

  ngOnInit(): void {
  }

}
