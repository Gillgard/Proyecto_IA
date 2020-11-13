import { Component, OnInit } from '@angular/core';
import { PeliculasService, Pelicula } from '../../services/pelicula.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent implements OnInit {

  peliculas:Pelicula[] = [];

  constructor( private _peliculasService:PeliculasService,
               private router:Router
                ) {
  }

  ngOnInit() {
    this.peliculas = this._peliculasService.getPeliculas();
  }

  verPelicula( idx:number ){
    this.router.navigate( ['/pelicula',idx] );
  }

}
