import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any): any {

    let url = "https://image.tmdb.org/t/p/w300"

    if(images?.poster_path){
      return url + images?.poster_path
    } else {
      if(images?.backdrop_path){
        return url + images?.backdrop
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }

}
