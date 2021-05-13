import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: [
    './estudios.component.css'
  ]
})
export class EstudiosComponent implements OnInit {

  estudios: Estudio []
  constructor(private estudioService: EstudioService) { 
    this.getEstudios()
  }

  getEstudios(){
    this.estudioService.getEstudios().subscribe((data: any) => {
      this.estudios = data.estudio
      
    })
  }

  ngOnInit(): void {
  }

}
