import { Component, OnInit, Input } from '@angular/core';
import { Mercaderia } from 'src/app/interface/mercaderia';
import { MercaderiaService } from 'src/app/services/mercaderia.service';

@Component({
  selector: 'app-table-mercaderia',
  templateUrl: './table-mercaderia.component.html',
  styleUrls: ['./table-mercaderia.component.css']
})
export class TableMercaderiaComponent {
  varMercaderia: Mercaderia[]=[];

  constructor(private mercaderiaService:MercaderiaService){}

  ngOnInit() {
    this.obtenerPuntos();
  }

  obtenerPuntos(){
    this.mercaderiaService.getMercaderia().subscribe(
      (res)=>{
        this.varMercaderia=res.body as Mercaderia[];
        console.log(this.varMercaderia);

      }
    )
  }

  descargarDocs(){
    console.log("Descragar");
  }


}
