import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscando',
  templateUrl: './buscando.component.html',
  styleUrls: ['./buscando.component.css']
})
export class BuscandoComponent implements OnInit {

  items:any;
  termino:string = "";
  constructor( private _peliculasService: PeliculasService,
               private activatedRoute:ActivatedRoute ) {
    this.activatedRoute.params
        .subscribe( (params:any) =>{

          if(isNaN(params['termino'])){
            /* No es un Numero */
            this._peliculasService.getPeliculas(params['termino'])
            .subscribe( (respuesta:any) => this.items = respuesta);
          } else {
            /* Es un Numero */
            this._peliculasService.getPeliculasYear(params['termino'])
            .subscribe( (respuesta:any) => this.items = respuesta);
          }
        });
   }

  ngOnInit(): void {
  }

}
