import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {


  @Input() pelicula:any = {};
  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  informacion(pelicula:any){
    this.router.navigateByUrl(`/buscar/buscando/${pelicula.title}/informacion/${pelicula.id}`);
  }

}
