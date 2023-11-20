import { Component } from '@angular/core';
import { Poliza } from 'src/app/interface/poliza';
import { PolizaService } from 'src/app/services/poliza.service';

@Component({
  selector: 'app-table-poliza',
  templateUrl: './table-poliza.component.html',
  styleUrls: ['./table-poliza.component.css']
})
export class TablePolizaComponent {

  varPoliza: Poliza[]=[];

  constructor(private polizaService:PolizaService){}

  ngOnInit() {
    this.obtenerPoliza();
  }

  obtenerPoliza(){
    this.polizaService.getPoliza().subscribe(
      (res)=>{
        this.varPoliza=res.body as Poliza[];
        console.log(this.varPoliza);

      }
    )
  }

  descargarDocs(){
    console.log("Descragar");
  }


}
