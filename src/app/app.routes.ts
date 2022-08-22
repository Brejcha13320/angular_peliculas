import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BuscandoComponent } from './pages/buscando/buscando.component';
import { InformacionComponent } from './pages/informacion/informacion.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'buscar', component: BuscarComponent,
  children:[
    {path: 'buscando/:termino', component: BuscandoComponent},
  ]
  },
  {path: `buscar/buscando/:termino/informacion/:id`, component: InformacionComponent},
  {path: '**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, { useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
