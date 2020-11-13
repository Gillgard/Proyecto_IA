import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/pelicula.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  peliculas:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _peliculasService: PeliculasService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.peliculas = this._peliculasService.buscarPelicula( params['termino'] );
      console.log( this.peliculas );
    });

  }

}
