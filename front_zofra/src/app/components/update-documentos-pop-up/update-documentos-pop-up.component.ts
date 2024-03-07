import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateDocumentos } from 'src/app/interface/update-documentos';
import { UpdateDocumentosService } from 'src/app/services/update-documentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-documentos-pop-up',
  templateUrl: './update-documentos-pop-up.component.html',
  styleUrls: ['./update-documentos-pop-up.component.css']
})
export class UpdateDocumentosPopUpComponent implements OnInit{
  id = -1;
  varDocsUps: UpdateDocumentos[]=[];
  file: any;
  errorMessage="";

  constructor(
    public dialogRef: MatDialogRef<UpdateDocumentosPopUpComponent>,
    private updateDocumentosService:UpdateDocumentosService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog){
      this.id = data.id
    }

  ngOnInit(): void {
    this.obtenerDocumentosUp();
    
  }

   obtenerDocumentosUp(){
    this.updateDocumentosService.getDocumentoUdatedByID(this.id).subscribe(
      (res)=>{
        this.varDocsUps=res.body as UpdateDocumentos[];
        console.log(this.varDocsUps);
        if(this.varDocsUps.length===0){
          Swal.fire({
            title: "¡No hay Historial de Actualizaciones!",
            text: "Historial Vacio",
            icon: "warning"
          }).then(()=>{
            this.dialogRef.close();
            location.reload();
          });
        }

      }
    )
  }


  descargarDocs(idUpdateDocumentos:any){

    console.log(this.file);

     this.updateDocumentosService.downloadFile(idUpdateDocumentos).subscribe(
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
}
