import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-pills',
  templateUrl: './nav-pills.component.html',
  styleUrls: ['./nav-pills.component.css']
})
export class NavPillsComponent {
  tab = localStorage.getItem("page");
  role = localStorage.getItem("area");

  // funciones para navegar por otras páginas (USUARIOS)
  setInicio(){
    localStorage.setItem("page", "inicio");
  }
  setMisDocs(){
    localStorage.setItem("page", "misdocs");
  }
  setOtrosDocs(){
    localStorage.setItem("page", "otrosdocs");
  }
  setPolizas(){
    localStorage.setItem("page", "polizas");
  }

  // funciones para navegar por otras paginas (ADMIN)
  setPuntos(){
    localStorage.setItem("page", "puntos");
  }
  setFiscalizacion(){
    localStorage.setItem("page", "fiscalizacion");
  }
  setMercaderia(){
    localStorage.setItem("page", "mercaderia");
  }
  setUsuarios(){
    localStorage.setItem("page", "usuarios");
  }
  

}
