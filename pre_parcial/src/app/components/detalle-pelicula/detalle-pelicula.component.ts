import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent {
  @Input() selectedPelicula: any; // Debes definir el tipo de objeto de película adecuado aquí  
}
