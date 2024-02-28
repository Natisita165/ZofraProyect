import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mercaderia } from 'src/app/interface/mercaderia';
import { PuntosControl } from 'src/app/interface/puntos-control';
import { Usuarios } from 'src/app/interface/usuarios';
import { MercaderiaService } from 'src/app/services/mercaderia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-mercaderia-pop-up',
  templateUrl: './editar-mercaderia-pop-up.component.html',
  styleUrls: ['./editar-mercaderia-pop-up.component.css']
})
export class EditarMercaderiaPopUpComponent {
  id = -1;
  file: any;
  withFile = false;
  mercaderia: Mercaderia = {
    dateIn: "",
    idMercaderia:0,
    idPuntosControl:{
      idPuntosControl:0,
      namePC:""
    },
    idUsuarios:{
      area:"",
      idUsuarios:0,
      lastname:"",
      mail:"",
      name:"",
      passwords:"",
      user:""
    },
    importer:"",
    nameMerc:"",
    price:0,
    quantity:0,
    type:""

  };
  usuario: Usuarios = {};
  puntosContr: PuntosControl = {};
  errorMessage = "";
  varMercaderia: Mercaderia = {};

  constructor(
    public dialogRef: MatDialogRef<EditarMercaderiaPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mercaderiaService: MercaderiaService
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
    return;
  }

  ngOnInit() {
    //this.updateMerc(this.mercaderia.idMercaderia);
    this.obtenerMercaderia();
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    this.withFile = true;
  }

  obtenerMercaderia() {
    this.mercaderiaService.getMercaderiaById(this.id).subscribe(
      (res) => {
        this.varMercaderia = res.body as Mercaderia;
        console.log("mercaderia recibida:", this.varMercaderia);
        console.log("idPuntos control: ", this.varMercaderia.idPuntosControl);
        this.varMercaderia.dateIn = this.varMercaderia.dateIn?.split("T")[0];
      }
    )
  }

  

    



  updateMerc(data: any) {
    console.log(data);
    console.log(this.file);

    this.mercaderia.nameMerc = data.txtNombreM;
    this.mercaderia.importer = data.txtNombreImporter;
    this.mercaderia.quantity = data.txtCantidadM;
    this.mercaderia.price = data.txtPrecioM;
    this.mercaderia.type = data.txtTipoM;
    this.mercaderia.dateIn = data.txtDateIn;
    this.mercaderia.idUsuarios = this.usuario;
    this.mercaderia.idUsuarios.idUsuarios = parseInt(localStorage.getItem("id")!);
    this.mercaderia.idPuntosControl = this.puntosContr;
    this.mercaderia.idPuntosControl.idPuntosControl = data.txtPuntoControlMerc;

    console.log("data para actualizar: ", this.mercaderia);
    this.mercaderiaService.editarMercaderia(this.mercaderia, this.id).subscribe(
      (res) => {
        console.log(res);
        const response = res as Mercaderia;
        const insertID = response.idMercaderia;
        

        if (this.file) {
          console.log("Editando archivo tambien")
          let formData = new FormData();
          formData.set("pdfD", this.file);
          this.mercaderiaService.uploadFile(formData, insertID).subscribe(
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


