import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Poliza } from 'src/app/interface/poliza';
import { PolizaService } from 'src/app/services/poliza.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nueva-poliza-pop-up',
  templateUrl: './nueva-poliza-pop-up.component.html',
  styleUrls: ['./nueva-poliza-pop-up.component.css']
})
export class NuevaPolizaPopUpComponent {
  username = "";
  id = -1;
  file:any;
  poliza:Poliza={};
  errorMessage="";


  constructor(
    public dialogRef: MatDialogRef<NuevaPolizaPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private polizaService:PolizaService
  ) {
    this.username = data.username;
    this.id = data.userId;
  }

  onCreate(){
    console.log("Creando instancia...")
  }
  
  onCancel(event:any){
    event.preventDefault();
    console.log("Cancel");
    this.dialogRef.close();
    return;
  }

  getFile(event:any){
    this.file = event.target.files[0];
  }


  faltaArchivo(){
    Swal.fire({
      title: "¡No hay documento!",
      text: "Sube un archivo porfavor",
      icon: "warning"
    });
  }

  onSubmitP(data:any){
    console.log(data);
    console.log(this.file);
    if(!this.file){
      console.log("falta el archivo!");
      this.faltaArchivo();
      return;
    }
    this.poliza.codeP=data.txtCodigoP;
    this.poliza.areaP=data.txtAreaP;
    this.poliza.stateP=data.txtEstadoP;
    this.poliza.typeP=data.txtTipoP;

    console.log("poliza",this.poliza);
    this.polizaService.createPoliza(this.poliza).subscribe(
      (res) => {
        console.log(res);
        const response = res as Poliza;
        const insertID = response.idPoliza;

        let formData = new FormData();
        formData.set("pdfD", this.file);
        this.polizaService.uploadFile(formData, insertID).subscribe(
          (res) => {
            console.log(res);
            this.dialogRef.close();
            location.reload();
          },
          (error) => {
            console.log(error);
            console.log("Entrando a la funcion de error");
            this.errorMessage = "Error con la subida de documento";
          }
        );
      },
      (error) => {
        console.log(error);
        console.log("Entrando a la funcion de error");
        this.errorMessage = "Error con la subida de documento 2";
      }
    );

  }

}
