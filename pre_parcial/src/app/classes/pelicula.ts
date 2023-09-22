export class Pelicula {

    id: number;
    nombre: string;
    tipo: tipo;
    fechaEstreno: Date;
    cantidadPublico: number;
    fotoPelicula: string;

    constructor(nombre: string,tipo: tipo,fechaEstreno: Date,cantidadPublico: number,fotoPelicula: string)
    {
        this.id = -1;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
    }
    public guardarEnLocalStorage()
    {
        let listaPeliculas : Array<Pelicula>;

        listaPeliculas = Pelicula.obtenerLocalStorage();

        listaPeliculas.push(this);
        
        localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
    }

    public static obtenerLocalStorage()
    {
        let jsonCargado = null;
        let peliculas : string | null = localStorage.getItem("listaPeliculas");

        if(peliculas != null)
        {
            
            jsonCargado = JSON.parse(peliculas)
        }
        else
        {
            jsonCargado = Array<Pelicula>();
        }

        return jsonCargado;
    }


}

export enum tipo{
    terror,
    comedia,
    amor,
    otros,
}
