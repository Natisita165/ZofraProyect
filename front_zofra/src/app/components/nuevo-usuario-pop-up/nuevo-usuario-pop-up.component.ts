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

  onCreate(){

    // this.usuariosServicio.create(this.varUsuarios[this.name,this.lastname,this.mail,this.area,this.passwords,this.user]).subscribe(
    //   response => this.router.navigate(['/usuarios'])
    // )
    console.log("Creando instancia...")
    console.log()
  }
  
  onCancel(){
    console.log("Cerrando panel");
    this.dialogRef.close();
  }
}
