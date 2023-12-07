import { Component } from '@angular/core';
import { Poliza } from 'src/app/interface/poliza';
import { PolizaService } from 'src/app/services/poliza.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevaPolizaPopUpComponent } from '../nueva-poliza-pop-up/nueva-poliza-pop-up.component';

@Component({
  selector: 'app-table-poliza',
  templateUrl: './table-poliza.component.html',
  styleUrls: ['./table-poliza.component.css']
})
export class TablePolizaComponent {

  varPoliza: Poliza[]=[];

  constructor(private polizaService:PolizaService, private dialog: MatDialog){}

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
  openDialog(){
    let dialogRef= this.dialog.open(NuevaPolizaPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        username: "Natalia",
        userId: 5
      }
    });
  }

}
