import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mercaderia } from 'src/app/interface/mercaderia';
import { PuntosControl } from 'src/app/interface/puntos-control';
import { Usuarios } from 'src/app/interface/usuarios';
import { MercaderiaService } from 'src/app/services/mercaderia.service';

@Component({
  selector: 'app-nueva-mercaderia-pop-up',
  templateUrl: './nueva-mercaderia-pop-up.component.html',
  styleUrls: ['./nueva-mercaderia-pop-up.component.css']
})
export class NuevaMercaderiaPopUpComponent {
  username = "";
  id = -1;
  file:any;
  mercaderia:Mercaderia={};
  usuario: Usuarios={};
  puntosContr: PuntosControl={};
  errorMessage="";
  constructor(
    public dialogRef: MatDialogRef<NuevaMercaderiaPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mercaderiaService:MercaderiaService
  ) {
    console.log("data recibida", data);
  }

  onCreate(){
    console.log("Creando instancia...")
  }
  
  onCancel(event:any){
    event.preventDefault();
    console.log("ouglhibl");
    this.dialogRef.close();
    return;
  }
  ngOnInit(){
     //this.updateMerc(this.mercaderia.idMercaderia);
  }

  onSubmit(data:any){
    console.log(data);
    console.log(this.file);
    this.mercaderia.nameMerc=data.txtNombreM;
    this.mercaderia.importer=data.txtNombreImporter;
    this.mercaderia.quantity=data.txtCantidadM;
    this.mercaderia.price=data.txtPrecioM;
    this.mercaderia.type=data.txtTipoM;
    this.mercaderia.dateIn=data.txtDateIn;
    this.mercaderia.idUsuarios=this.usuario;
    this.mercaderia.idUsuarios.idUsuarios=parseInt(localStorage.getItem("id")!);
    this.mercaderia.idPuntosControl=this.puntosContr;
    this.mercaderia.idPuntosControl.idPuntosControl=data.txtPuntoControlMerc;

    console.log("mercaderia",this.mercaderia);
    this.mercaderiaService.creatMercaderia(this.mercaderia).subscribe(
      (res) => {
        console.log(res);
        const response = res as Mercaderia;
        const insertID = response.idMercaderia;

        let formData = new FormData();
        formData.set("pdfD", this.file);
        this.mercaderiaService.uploadFile(formData, insertID).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
            console.log("Entrando a la funcion de error");
            this.errorMessage = "Error con la subida de documento";
          }
        );
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

  getFile(event:any){
    this.file = event.target.files[0];
  }

  updateMerc(data: any){
    console.log(data);
    console.log(this.file);
    this.mercaderia.nameMerc=data.txtNombreM;
    this.mercaderia.importer=data.txtNombreImporter;
    this.mercaderia.quantity=data.txtCantidadM;
    this.mercaderia.price=data.txtPrecioM;
    this.mercaderia.type=data.txtTipoM;
    this.mercaderia.dateIn=data.txtDateIn;
    this.mercaderia.idUsuarios=this.usuario;
    this.mercaderia.idUsuarios.idUsuarios=parseInt(localStorage.getItem("id")!);
    this.mercaderia.idPuntosControl=this.puntosContr;
    this.mercaderia.idPuntosControl.idPuntosControl=data.txtPuntoControlMerc;

    console.log("mercaderoa",this.mercaderia);
    this.mercaderiaService.editarMercaderia(this.mercaderia, this.id).subscribe(
      (res) => {
        console.log(res);
        const response = res as Mercaderia;
        const insertID = response.idMercaderia;

        let formData = new FormData();
        formData.set("pdfD", this.file);
        this.mercaderiaService.uploadFile(formData, insertID).subscribe(
          (res) => {
            console.log(res);
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
