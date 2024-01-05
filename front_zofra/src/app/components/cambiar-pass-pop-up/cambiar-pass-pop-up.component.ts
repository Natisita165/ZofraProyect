import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cambiar-pass-pop-up',
  templateUrl: './cambiar-pass-pop-up.component.html',
  styleUrls: ['./cambiar-pass-pop-up.component.css']
})
export class CambiarPassPopUpComponent {


  varPass: Usuarios={}

  constructor(
    public dialogRef: MatDialogRef<CambiarPassPopUpComponent>,
    private usuariosService: UsuariosServiceService,
    private router:Router,
  ) {
  }

  updateDoc(data:any){
    if(data.txtNuevPass1 !== data.txtNuevPass2){
      Swal.fire({
        title: "Error al actualizar",
        text: "Las contraseñas deben ser identicas",
        icon: "warning"
      });
      return;
    }
    this.varPass.passwords = data.txtNuevPass1;

    this.usuariosService.editarUsuario(this.varPass, localStorage.getItem("id")).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('home');
        this.dialogRef.close();
        //       location.reload();
      },
      (error) => {
        console.log(error);
        console.log("Entrando a la funcion de error");
      }
    );
  }
}
