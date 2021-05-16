import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  usuario: Usuario

  constructor(private sidebarService: SidebarService, private usuarioService: UsuarioService) {
    this.menuItems = this.sidebarService.menu
    this.getUsuario()
  }

  getUsuario(){
    this.usuarioService.getUsuario().subscribe( (data: any) => {
      this.usuario = data.usuario
      console.log(this.usuario);
      
    })
  }

  hideClass(){
    if(document.getElementById("collapseOne").classList.contains("show")){
      document.getElementById("collapseOne").classList.remove("show")
      console.log("tiene");
      
    } else {
      document.getElementById("collapseOne").classList.add("show")
      console.log("No tiene");

    }
  }

  ngOnInit(): void {
  }

}
