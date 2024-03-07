import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatePasswords } from 'src/app/interface/update-passwords';

@Component({
  selector: 'app-cambiar-pass-pop-up',
  templateUrl: './cambiar-pass-pop-up.component.html',
  styleUrls: ['./cambiar-pass-pop-up.component.css']
})
export class CambiarPassPopUpComponent {

  usuario: Usuarios={};
  varPass: Usuarios={};
  varFirst: Usuarios;
  newPass: UpdatePasswords={};
  errorMessage='';

  constructor(
    public dialogRef: MatDialogRef<CambiarPassPopUpComponent>,
    private usuariosService: UsuariosServiceService,
    private router:Router,
  ) {
  }

  updatePass(data:any){
    if(data.txtNuevPass1 !== data.txtNuevPass2){
      Swal.fire({
        title: "Error al actualizar",
        text: "Las contraseñas deben ser identicas",
        icon: "warning"
      });
      return;
    }
    this.newPass.newPasswords = data.txtNuevPass1;
    
    this.usuario.user=localStorage.getItem("username");
    this.usuario.passwords=data.txtNuevPass3;
    this.usuariosService.login(this.usuario).subscribe(
      (res)=>{
        console.log(res);
        console.log(res.status);
        // this.usuarioResponse=res.body!;
        console.log("usuario recibido", res.body!)
        //let idUsuarios = res.body!.idUsuarios;
        if (res.status===200){
          console.log("Guardando usuario y accediendo");
          this.usuariosService.checkPasword(this.newPass,localStorage.getItem("id")).subscribe(
            (res) => {
              console.log("lo que sea",res);
              if(res === 0){
                this.usuariosService.editarUsuarioContrasenia(this.varPass, localStorage.getItem("id")).subscribe(
                  (res) => {
                    console.log(res);
                    Swal.fire({
                      title: "Actualizado correctamente",
                      text: "Tu contraseña fue actualizada",
                      icon: "success"
                    });
                    this.router.navigateByUrl('home');
                    this.dialogRef.close();
                    //       location.reload();
                  },
                  (error) => {
                    console.log(error);
                    console.log("Entrando a la funcion de error");
                  }
                );
              }else{
                Swal.fire({
                  title: "Error al actualizar",
                  text: "No usar contraseñas antiguas",
                  icon: "warning"
                });
                return;
              }
            },
            (error) => {
              console.log(error);
              console.log("Entrando a la funcion de error");
            }
          );
          
        }
      },
      (error)=>{
        Swal.fire({
          title: "Error al actualizar",
          text: "Contraseña antigua incorrecta",
          icon: "warning"
        });
        return;
        
        
      }
    );


   
  }
}
