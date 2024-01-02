import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //comentarios estaticos para probar
//   comentarios: any[] = [{
//     nombre: "Nicolas Viruel",
//     alias: "@nicolasviruel",
//     tiempo: "hace 1 minuto",
//     imagen: "../../../assets/imagen1.jpg",
//     comentario: "Este es mi primer comentario"
//   },
//   {
//     nombre: "Federico Mettler",
//     alias: "@fedeMettler",
//     tiempo: "hace 12 minutos",
//     imagen: "../../../assets/imagen2.jpg",
//     comentario: "Este es un segundo comentario mas largo que el anterior"
//   },
//   {
//     nombre: "Sergio Rosales",
//     alias: "@sergioRosales",
//     tiempo: "hace 30 minutos",
//     imagen: "../../../assets/imagen3.jpg",
//     comentario: "Este es un tercer comentario que tiene mas texto que los anteriores"
//   }
// ];

  comentarios: any;
  nombre: any;
  comentario: any;

  constructor(private _comentario: ComentarioService) { }

  

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  

  agregarComentario(){
    
    console.log(this.nombre);
    console.log(this.comentario);

    let comentarioNuevo = {
      nombre: this.nombre,
      // alias: `@ ${this.nombre}`,
      tiempo: "hace 1 minuto",
      imagen: "../../../assets/imagen1.jpg",
      comentario: this.comentario
    }

    // this.comentarios.push(comentarioNuevo);
    this._comentario.crear(comentarioNuevo)
    .subscribe((data: any) => {
      console.log("comentario guardado" + data);
      this.obtenerComentarios();  
    });
    this.resetform();
  }

  resetform(){
    this.nombre = "";
    this.comentario = "";
  }

  eliminar(indice: any){
    // this.comentarios.splice(indice, 1);
    this._comentario.eliminar(indice)
    .subscribe((data: any) => {
      console.log("comentario eliminado" + data);
      this.obtenerComentarios();  
    });
  }

  obtenerComentarios() {
    this._comentario.obtener()
      .subscribe((data: any) => {  
        this.comentarios = data;
        console.log(this.comentarios);
      });
  }
  

}
