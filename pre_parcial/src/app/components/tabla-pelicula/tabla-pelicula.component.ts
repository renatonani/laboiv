import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula, tipo } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  @Input() peliculas :Pelicula[];
  @Output() peliculaSeleccionada = new EventEmitter<any>();

  constructor()
  {
    this.peliculas = [];    
  }
  seleccionarPelicula(pelicula: any) {
    this.peliculaSeleccionada.emit(pelicula); // Emitir la película seleccionada
  }
}
