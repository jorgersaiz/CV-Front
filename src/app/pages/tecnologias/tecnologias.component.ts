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
  filterText: string = ""
  isLoaded: boolean
  labels: string[]
  puntuaciones: number []
  grafica: string = "none"
  tabla: string = "block"

  colors: Color[] = [
    {backgroundColor: []}
  ]

  arrayFiltrado: Tecnologia[]
  constructor(private tecnologiaService: TecnologiaService) { 
  }

  generarColores(){
    
    let colores = []
    for (let tec of this.tecnologias){
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      colores.push(randomColor);
    }

    this.colors[0].backgroundColor = colores
      
    

  }
  

  getTecnologias(){
    this.tecnologiaService.getTecnologias().subscribe((data: any) => {
      this.tecnologias = data.tecnologia
      this.arrayFiltrado = this.tecnologias
      this.isLoaded = true

      this.labels = this.arrayFiltrado.map(tec => tec.nombre)
      this.puntuaciones = this.arrayFiltrado.map( tec => tec.puntuacion)

      this.generarColores()

      
      
      this.puntuaciones.push(0,10)
    })
  }

  filtrarPalabra(text){
    
    this.arrayFiltrado = this.tecnologias.filter( tec => tec.nombre.toLowerCase().includes(text) )  
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
