import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html'
})
export class PeliculaTarjetaComponent implements OnInit {

  @Input() pelicula: any = {};
  @Input() index: number;

  @Output() peliculaSeleccionada: EventEmitter<number>;

  constructor(private router: Router) {
    this.peliculaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  verPelicula() {
    this.router.navigate( ['/pelicula', this.index] );
  }

}
