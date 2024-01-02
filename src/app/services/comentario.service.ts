import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  url = 'http://localhost:5000/api/comentarios'

  constructor( private httpClient: HttpClient) { }

  obtener() {
    return this.httpClient.get(this.url)
  }

  crear(comentario: any) {
    return this.httpClient.post(this.url, comentario)
  }

  eliminar(id: any) {
    return this.httpClient.delete(this.url + '/' + id)
  }


} 
