import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Documento } from 'src/app/interface/documento';
import { Usuarios } from 'src/app/interface/usuarios';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'app-nuevo-documento-pop-up',
  templateUrl: './nuevo-documento-pop-up.component.html',
  styleUrls: ['./nuevo-documento-pop-up.component.css']
})
export class NuevoDocumentoPopUpComponent {

  file: any;
  documento: Documento = {};
  errorMessage='';
  varDocumento: Documento={};
  usuario: Usuarios={};
  
  constructor(
    public dialogRef: MatDialogRef<NuevoDocumentoPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private documentoService: DocumentoService
  ) {
   
  }


  onSubmit(data: any){
    console.log(data);
    console.log(this.file);
    this.documento.nameD = data.txtNombreD;
    this.documento.codeD = data.txtCodigoD;
    this.documento.typeD = data.txtTipoD;
    this.documento.estadoD = data.txtEstadoD;
    this.documento.areaD = data.txtAreaD;
    
    this.documento.idUsuarios = this.usuario;
    this.documento.idUsuarios.idUsuarios = parseInt(localStorage.getItem("id")!);

    this.documentoService.createDocumento(this.documento).subscribe(
      (res) => {
        console.log(res);
        const response = res as Documento;
        const insertID = response.idDocumentos;

        let formData = new FormData();
        formData.set("pdfD", this.file);
        this.documentoService.uploadFile(formData, insertID).subscribe(
          (res) => {
            console.log(res);
             this.onCancel();
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

  getFile(event: any){
    this.file = event.target.files[0];
  }
  
  onCancel(){
    console.log("Cerrando panel");
    this.dialogRef.close();
  }

}
