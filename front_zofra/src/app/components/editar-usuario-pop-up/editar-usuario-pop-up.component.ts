import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';

@Component({
  selector: 'app-editar-usuario-pop-up',
  templateUrl: './editar-usuario-pop-up.component.html',
  styleUrls: ['./editar-usuario-pop-up.component.css']
})
export class EditarUsuarioPopUpComponent {

  id = -1;
  file: any;
  withFile = false;
  errorMessage = "";

  varUsuario: Usuarios={};

  constructor(
    public dialogRef: MatDialogRef<EditarUsuarioPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuariosService: UsuariosServiceService
  ) {
    console.log("data recibida", data);
    this.id = data.id;
  }
  onCreateUser() {
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
    this.obtenerUsuario()
  }
  obtenerUsuario() {
    this.usuariosService.getUsuariosById(this.id).subscribe(
      (res) => {
        this.varUsuario = res.body as Usuarios;
        console.log("Usuario recibida:", this.varUsuario);
      }
    )
  }


  onUpdateUser(data: any) {
    console.log(data);
    console.log(this.file);
    this.varUsuario.name=data.txtname;
    this.varUsuario.lastname=data.txtapellido;
    this.varUsuario.user=data.txtusuario;
    this.varUsuario.passwords=data.txtpassword;
    this.varUsuario.mail=data.txtmail;
    this.varUsuario.area=data.txtarea;

    console.log("data para actualizar: ", this.varUsuario);
    this.usuariosService.editarUsuario(this.varUsuario, this.id).subscribe(
      (res) => {
        console.log(res);
        const response = res as Usuarios;
        const insertID = response.idUsuarios;

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
