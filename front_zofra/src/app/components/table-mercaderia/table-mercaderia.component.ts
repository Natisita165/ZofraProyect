import { Component, OnInit, Input } from '@angular/core';
import { Mercaderia } from 'src/app/interface/mercaderia';
import { MercaderiaService } from 'src/app/services/mercaderia.service';
import Swal from 'sweetalert2';
import { NuevaMercaderiaPopUpComponent } from '../nueva-mercaderia-pop-up/nueva-mercaderia-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-mercaderia',
  templateUrl: './table-mercaderia.component.html',
  styleUrls: ['./table-mercaderia.component.css']
})
export class TableMercaderiaComponent {
  varMercaderia: Mercaderia[]=[];

  constructor(private mercaderiaService:MercaderiaService, private dialog: MatDialog){}

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

  handleClick() {
    Swal.fire({
      title: "Eliminar registro?",
      text: "No podrás deshacer esta opción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Eliminando registro...");
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }


  openDialog(){
    let dialogRef= this.dialog.open(NuevaMercaderiaPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        username: "Natalia",
        userId: 5
      }
    });
  }



}
