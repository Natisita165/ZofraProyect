import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdatePoliza } from 'src/app/interface/update-poliza';
import { UpdatePolizaService } from 'src/app/services/update-poliza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-poliza-pop-up',
  templateUrl: './update-poliza-pop-up.component.html',
  styleUrls: ['./update-poliza-pop-up.component.css']
})
export class UpdatePolizaPopUpComponent implements OnInit{
  id = -1;
  varPolizaUp: UpdatePoliza[]=[];
  file: any;
  errorMessage="";

  constructor(
    public dialogRef: MatDialogRef<UpdatePolizaPopUpComponent>,
    private updatePolizaService:UpdatePolizaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog){
      this.id = data.id
    }


    
  ngOnInit(): void {
    this.obtenerDocumentosUp();
    
  }

   obtenerDocumentosUp(){
    this.updatePolizaService.getolizaUdatedByID(this.id).subscribe(
      (res)=>{
        this.varPolizaUp=res.body as UpdatePoliza[];
        console.log(this.varPolizaUp);
        if(this.varPolizaUp.length===0){
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


  descargarDocsPoli(idUpdatePoliza:any){

    console.log(this.file);

     this.updatePolizaService.downloadFile(idUpdatePoliza).subscribe(
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
