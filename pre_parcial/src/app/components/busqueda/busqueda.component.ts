import { Component, OnInit } from '@angular/core';
import { Pelicula, tipo } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{ 
  
  peliculas: Pelicula[] = [];  
  peliculaSeleccionada: any;


  ngOnInit(): void {
    //let pelicula1 = new Pelicula("Shrek", tipo.comedia,new Date(), 10, "../../../assets/shrek.jpg");
    //let pelicula2 = new Pelicula("Shrek2", tipo.comedia,new Date(), 10, "../../../assets/shrek2.jpg");
    //let pelicula3 = new Pelicula("Shrek3", tipo.comedia,new Date(), 10, "../../../assets/shrek3.jpg"); 

    //pelicula1.guardarEnLocalStorage();
    //pelicula2.guardarEnLocalStorage();
    //pelicula3.guardarEnLocalStorage();    

    this.peliculas = Pelicula.obtenerLocalStorage();
    //localStorage.removeItem("listaPeliculas");
  }  

  mostrarDetalles(pelicula: any) {
    this.peliculaSeleccionada = pelicula;
  }  

}
