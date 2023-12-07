import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/interface/documento';
import { DocumentoService } from 'src/app/services/documento.service';
import Swal from 'sweetalert2';
import { NuevoDocumentoPopUpComponent } from '../nuevo-documento-pop-up/nuevo-documento-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  varDocs: Documento[]=[];

  constructor(private documentoService:DocumentoService, private dialog: MatDialog){}

  ngOnInit() {
    this.obtenerDocumentos();
  }

  obtenerDocumentos(){
    this.documentoService.getDocumentos().subscribe(
      (res)=>{
        this.varDocs=res.body as Documento[];
        console.log(this.varDocs);

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
    let dialogRef= this.dialog.open(NuevoDocumentoPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        username: "Natalia",
        userId: 5
      }
    });
  }

}
