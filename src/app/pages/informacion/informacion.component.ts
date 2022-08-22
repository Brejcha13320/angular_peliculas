import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  pelicula:any;
  constructor( private _peliculasService: PeliculasService, 
              private activatedRoute:ActivatedRoute,
              private router:Router ) {
    
      this.activatedRoute.params
        .subscribe( params => {
          this._peliculasService.getPelicula(params['id'])
              .subscribe( respuesta => {
                this.pelicula = respuesta;
              })

        });
   }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigateByUrl(`buscar/buscando/${this.pelicula?.original_title}`)
  }
}
