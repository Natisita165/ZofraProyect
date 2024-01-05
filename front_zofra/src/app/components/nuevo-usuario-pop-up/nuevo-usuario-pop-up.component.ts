import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';

@Component({
  selector: 'app-nuevo-usuario-pop-up',
  templateUrl: './nuevo-usuario-pop-up.component.html',
  styleUrls: ['./nuevo-usuario-pop-up.component.css']
})
export class NuevoUsuarioPopUpComponent implements OnInit{
  name = "";
  lastname = "";
  mail="";
  area="";
  passwords="";
  user="";
  
  varUsuarios:Usuarios[]=[];
  ngOnInit() {
  }
  usuario: Usuarios={};
  usuarioResponse: Usuarios={};
  errorMessage='';
  constructor(
    public dialogRef: MatDialogRef<NuevoUsuarioPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router:Router, public usuariosServicio:UsuariosServiceService
  ) {
    // this.name = data.name;
    // this.lastname=data.lastname;
    // this.mail=data.mail;
    // this.area=data.area;
    // this.passwords=data.passwords;
    // this.user=data.user;
  }

  onCreate(data:any){


    // this.usuariosServicio.create(this.varUsuarios[this.name,this.lastname,this.mail,this.area,this.passwords,this.user]).subscribe(
    //   response => this.router.navigate(['/usuarios'])
    // )
    console.log("Creando instancia...")
    console.log(data)
    this.usuario.name=data.txtname;
    this.usuario.lastname=data.txtapellido;
    this.usuario.user=data.txtusuario;
    this.usuario.passwords=data.txtpassword;
    this.usuario.mail=data.txtmail;
    this.usuario.area=data.txtarea;
    this.usuario.first=false;

    this.usuariosServicio.create(this.usuario).subscribe(
      (res)=>{
        console.log(res);
        this.onCancel();
        location.reload();
        // this.router.navigateByUrl('crear-nuevo-usuario');
        // this.usuarioResponse=res.body!;
        // //let idUsuarios = res.body!.idUsuarios;
        // if (res.status===200){
        //   console.log("Guardando usuario");
        //   this.errorMessage = "Se creo correctamente";
      
        //   this.onCancel();
  
        // }
      },
      (error)=>{
        console.log(error);
        console.log("Entrando a la funcion de error");
        this.errorMessage = "Error con el inicio de sesion";
        
        
      }
      
  
    );
  }
  
  onCancel(){
    console.log("Cerrando panel");
    this.dialogRef.close();
  }




}
