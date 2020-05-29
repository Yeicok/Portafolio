import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPaginas } from '../interfaces/info-pagina.intergace';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPaginas = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
    // leer un archivo json\
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: infoPaginas) => {

      this.cargada =true;
      this.info = resp;
      // console.log(resp);

    });
   }

   private cargarEquipo(){
    // leer un archivo json\
    this.http.get('https://angular-html-2515d.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);

    });
   }
}
