import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    "./dashboard.component.css"
  ]
})
export class DashboardComponent implements OnInit {

  usuario: Usuario
  height1: string
  constructor(private usuarioService: UsuarioService) { 
    
    
  }
  
  getUsuario(){
    this.usuarioService.getUsuario().subscribe((data: any) => {
      this.usuario = data.usuario
      
    })
  }
  ngOnInit(): void {
    this.getUsuario()
  }

}
