import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/interface/documento';
import { DocumentoService } from 'src/app/services/documento.service';
import Swal from 'sweetalert2';
import { NuevoDocumentoPopUpComponent } from '../nuevo-documento-pop-up/nuevo-documento-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarDocumentoPopUpComponent } from '../editar-documento-pop-up/editar-documento-pop-up.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  varDocs: Documento[]=[];
  file: any;
  errorMessage="";

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

  descargarDocs(idDocumentos:any){

    console.log(this.file);

     this.documentoService.downloadFile(idDocumentos).subscribe(
      (data:Blob)=>{
        var file=new Blob([data],{type:"application/pdf"});
        var fileUrl=URL.createObjectURL(file);

        //ABRI UNA NUEVA PESTANIA
        window.open(fileUrl);
        var a=document.createElement("a");
        a.href=fileUrl;
        a.target="_blank";
        a.download="name.pdf";
        document.body.appendChild(a);
        a.click();


        // console.log("Respuesta");
        // console.log(res);
        
      },
      (error)=>{
        console.log(error);
        console.log("Entrando a la funcion de error2");
        
      }
    );
  }





  deleteDoc(idDocumentos:any) {
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

        this.documentoService.deleteDoc(idDocumentos).subscribe(
          (res)=>{
            console.log("Documento Eliminada: ", res);
            setTimeout('location.reload()',3000);
    
          },
          (error)=>{
            console.log("No se pudo eliminar", error);
            setTimeout('location.reload()',3000);

          }
        )
         Swal.fire({
           title: "ELIMINADO!",
           text: "Tu documento ha sido eliminado",
           icon: "success"
         });
      }
    });
  }

  openDialogDoc(){
    let dialogRef= this.dialog.open(NuevoDocumentoPopUpComponent, {
      width: '50%',
    });
  }


  openEditionDoc(idDocumentos:any){
    let dialogRef= this.dialog.open(EditarDocumentoPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        id: idDocumentos
      }
    });
  }

}
