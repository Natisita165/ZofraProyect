import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateMercaderia } from 'src/app/interface/update-mercaderia';
import { UpdateMercaderiaService } from 'src/app/services/update-mercaderia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-mercaderia-pop-up',
  templateUrl: './update-mercaderia-pop-up.component.html',
  styleUrls: ['./update-mercaderia-pop-up.component.css']
})
export class UpdateMercaderiaPopUpComponent implements OnInit {

  id = -1;
  varUpdateMercaderia: UpdateMercaderia[]=[];
  file: any;
  errorMessage="";

  constructor(
    public dialogRef: MatDialogRef<UpdateMercaderiaPopUpComponent>,
    private updateMercaderiaService:UpdateMercaderiaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog){
      this.id = data.id
    }

    ngOnInit(): void {
      this.obtenerMercaderiaUp();
      
    }
  
     obtenerMercaderiaUp(){
      this.updateMercaderiaService.getMercaderiaUdatedByID(this.id).subscribe(
        (res)=>{
          this.varUpdateMercaderia=res.body as UpdateMercaderia[];
          console.log(this.varUpdateMercaderia);
          if(this.varUpdateMercaderia.length===0){
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
  
  
    descargarDocs(idUpdateMercaderia:any){
  
      console.log(this.file);
  
       this.updateMercaderiaService.downloadFile(idUpdateMercaderia).subscribe(
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
