import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styles: [
  ]
})
export class ExperienciasComponent implements OnInit {

  experiencias: Experiencia []
  constructor(private experienciaService: ExperienciaService) { 
    this.getExperiencias()
  }

  getExperiencias(){
    this.experienciaService.getExperiencia().subscribe((data: any) => {
      this.experiencias = data.experiencia

      console.log(this.experiencias);
      
    })
  }

  ngOnInit(): void {
  }

}
