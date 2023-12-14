import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Documento } from 'src/app/interface/documento';
import { Usuarios } from 'src/app/interface/usuarios';
import { DocumentoService } from 'src/app/services/documento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-documento-pop-up',
  templateUrl: './editar-documento-pop-up.component.html',
  styleUrls: ['./editar-documento-pop-up.component.css']
})
export class EditarDocumentoPopUpComponent {
  id = -1;
  file: any;
  withFile = false;
  errorMessage = "";
  varDocumento: Documento={
    idDocumentos:0,
    areaD:"",
    codeD:"",
    estadoD:false,
    nameD:"",
    typeD:"",
    idUsuarios:{
      area:"",
      idUsuarios:0,
      lastname:"",
      mail:"",
      name:"",
      passwords:"",
      user:""
    }
  };
  usuario: Usuarios = {};

  constructor(
    public dialogRef: MatDialogRef<EditarDocumentoPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private documentoService: DocumentoService
  ) {
    console.log("data recibida", data);
    this.id = data.id;
  }

  onCreate() {
    console.log("Creando instancia...")
  }

  onCancel(event: any) {
    event.preventDefault();
    console.log("cerrando----");
    this.dialogRef.close();
    location.reload();
    return;
  }

  ngOnInit(){
this.obtenerDocumento()
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    this.withFile = true;
  }

  obtenerDocumento() {
    this.documentoService.getDocumentoById(this.id).subscribe(
      (res) => {
        this.varDocumento = res.body as Documento;
        console.log("documento recibida:", this.varDocumento);
      }
    )
  }
  faltaArchivo(){
    Swal.fire({
      title: "¡No hay documento!",
      text: "Sube un archivo porfavor",
      icon: "warning"
    });
  }

  updateDoc(data: any) {
    console.log(data);
    console.log(this.file);
    if(!this.file){
      console.log("falta el archivo!");
      this.faltaArchivo();
      return;
    }
    this.varDocumento.nameD=data.txtNombreD;
    this.varDocumento.codeD=data.txtCodigoD;
    this.varDocumento.typeD=data.txtTipoD;
    this.varDocumento.estadoD=data.txtEstadoD;
    this.varDocumento.areaD=data.txtAreaD;
    this.varDocumento.idUsuarios = this.usuario;
    this.varDocumento.idUsuarios.idUsuarios = parseInt(localStorage.getItem("id")!);
    
    console.log("data para actualizar: ", this.varDocumento);
    this.documentoService.editarDocumento(this.varDocumento, this.id).subscribe(
      (res) => {
        console.log(res);
        const response = res as Documento;
        const insertID = response.idDocumentos;

        if (this.withFile === true) {
          console.log("Editando archivo tambien")
          let formData = new FormData();
          formData.set("pdfD", this.file);
          this.documentoService.uploadFile(formData, insertID).subscribe(
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
          
        }
        this.dialogRef.close();
              location.reload();
      },
      (error) => {
        console.log(error);
        console.log("Entrando a la funcion de error");
        this.errorMessage = "Error con la subida de documento 2";
      }
    );
  }
}
