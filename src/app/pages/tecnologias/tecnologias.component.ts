import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
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
  isLoaded: boolean
  labels: string[]
  puntuaciones: number []
  grafica: string = "none"
  tabla: string = "block"

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

  filtrarPalabra(text: string){
    
    this.arrayFiltrado = this.tecnologias.filter( tec => tec.nombre.toLowerCase().startsWith(text.toLowerCase()) )  
  
    this.labels = this.arrayFiltrado.map(tec => tec.nombre)
    this.puntuaciones = this.arrayFiltrado.map( tec => tec.puntuacion)  
    this.puntuaciones.push(0,10)

  }

  switcher(){

    if(this.tabla == "block"){
      this.tabla = "none"
      this.grafica = "block"
      document.getElementById("switch").innerText = "Formato tabla"
    } else {
      document.getElementById("switch").innerText = "Formato gráfica"
      this.tabla = "block"
      this.grafica = "none"
    }
  }

  ngOnInit(): void {
    this.getTecnologias()
  }

}
