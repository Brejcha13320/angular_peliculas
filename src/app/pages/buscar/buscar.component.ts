import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  year = new Date().getFullYear();
  years: any[] = [];
  search:string = "";
  constructor( private _peliculasService: PeliculasService,
              private activatedRoute: ActivatedRoute,
              private router:Router ) {
      if(this.search === ''){
        this.activatedRoute.children[0]?.params
            .subscribe( params => {
              this.search = params['termino'];
            });
      } 
   }


  ngOnInit(): void {
    for(let i = this.year - 31 ; i <= this.year ; i++ ){
      this.years.push(i);
    }
  }

  getPeliculasYear(termino:number){
    this.router.navigateByUrl(`/buscar/buscando/${termino}`);
  }

  buscando(termino:string){
    this.router.navigateByUrl(`/buscar/buscando/${termino}`);
  }
}

