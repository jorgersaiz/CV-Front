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
  labels: string[]
  puntuaciones: number []

  arrayFiltrado: Tecnologia[]
  constructor(private tecnologiaService: TecnologiaService) { 
  }

  getTecnologias(){
    this.tecnologiaService.getTecnologias().subscribe((data: any) => {
      this.tecnologias = data.tecnologia
      this.arrayFiltrado = this.tecnologias
      this.isLoaded = true

      this.labels = this.arrayFiltrado.map(tec => tec.nombre)
      this.puntuaciones = this.arrayFiltrado.map( tec => tec.puntuacion)
      
      this.puntuaciones.push(0,10)
    })
  }

  filtrarPalabra(text){
    
    this.arrayFiltrado = this.tecnologias.filter( tec => tec.nombre.toLowerCase().includes(text) )  
    this.labels = this.arrayFiltrado.map(tec => tec.nombre)

    this.puntuaciones = this.arrayFiltrado.map( tec => tec.puntuacion)  
    this.puntuaciones.push(0,10)

  }

  ngOnInit(): void {
    this.getTecnologias()
  }

}
