import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/models/tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: [
    './tecnologias.component.css'
  ]
})
export class TecnologiasComponent implements OnInit {

  tecnologias: Tecnologia []
  filterText: string = ""
  isLoaded: boolean

  arrayFiltrado: Tecnologia[]
  constructor(private tecnologiaService: TecnologiaService) { 
  }

  getTecnologias(){
    this.tecnologiaService.getTecnologias().subscribe((data: any) => {
      this.tecnologias = data.tecnologia
      this.arrayFiltrado = this.tecnologias
      this.isLoaded = true

      console.log(this.tecnologias);
      
    })
  }

  filtrarPalabra(text){
    
    this.arrayFiltrado = this.tecnologias.filter( tec => tec.nombre.toLowerCase().includes(text) )    
  }

  ngOnInit(): void {
    this.getTecnologias()
  }

}
