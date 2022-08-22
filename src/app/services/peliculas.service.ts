import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "0cd92870c4f22500f312a6efac9e18cc";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http:HttpClient ) { }

  getPelicula(id:number){
    return this.http.get(`${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`);
  }

  getPeliculas(termino:string){
    return this.http.get(`${this.urlMoviedb}/search/movie?api_key=${this.apikey}&query=${termino}`)
        .pipe(
          map( (respuesta:any) => {
            return respuesta['results'];
          })
        );
  }

  getPeliculasYear(termino:number){
    return this.http.get(`${this.urlMoviedb}/discover/movie?with_genres=18&primary_release_year=${termino}&api_key=${this.apikey}`)
        .pipe(
          map( (respuesta:any) => {
            console.log(respuesta);
            return respuesta['results'];
          })
        );
  }


  getPopulares(){
    return this.http.get(`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}`)
        .pipe(
          map( (respuesta:any) => {
            return respuesta['results'];
          })
        );
  }

  getBoys(){
    return this.http.get(`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`)
        .pipe(
          map( (respuesta:any) => {
            return respuesta['results'];
          })
        );
  }

  getCartelera():any{
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate( hasta.getDate() + 7 );

    let desdeDate:any = desde.getDate();
    let desdeMonth:any = desde.getMonth() + 1;
    
    let hastaDate:any = hasta.getDate();
    let hastaMonth:any = hasta.getMonth() + 1;

    if(desdeDate.toString().length == 1){
      desdeDate = `0${desdeDate}`;
    }
    
    if(desdeMonth.toString().length == 1){
      desdeMonth = `0${desdeMonth}`;
    }

    if(hastaDate.toString().length == 1){
      hastaDate = `0${hastaDate}`;
    }
    
    if(hastaMonth.toString().length == 1){
      hastaMonth = `0${hastaMonth}`;
    }
    let desdeStr = `${ desde.getFullYear() }-${ desdeMonth }-${ desdeDate }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hastaMonth }-${ hastaDate }`;

    return this.http.get(`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}`)
        .pipe(
          map( (respuesta:any) => {
            return respuesta['results'];
          })
        );
  }

}
