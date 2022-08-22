import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  items:any;
  opcion:string = "Cartelera"

  constructor( private _peliculasService: PeliculasService ) {
    this.selectMovies(this.opcion);
   }

  ngOnInit(): void {
  }
  
  selectMovies(opcion:string){
    this.opcion = opcion;
    switch(this.opcion){
      case 'Cartelera':
        this._peliculasService.getCartelera()
        .subscribe( (respuesta:any) => {
          this.items = respuesta;
        });
        break;
      case 'Populares':
        this._peliculasService.getPopulares()
        .subscribe( (respuesta:any) => {
          this.items = respuesta;
        });
        break;
      case 'Boys':
        this._peliculasService.getBoys()
        .subscribe( (respuesta:any) => {
          this.items = respuesta;
        });
        break;
    }
  }

}
