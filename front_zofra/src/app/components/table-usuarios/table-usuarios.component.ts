import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevoUsuarioPopUpComponent } from '../nuevo-usuario-pop-up/nuevo-usuario-pop-up.component';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnInit{
  varUsuarios: Usuarios[]=[];

  constructor(private usuariosService:UsuariosServiceService, private dialog: MatDialog){}

  

  // openModel(){
  //   document.getElementById('crear-nuevo-usuario')?.style.display='block';
  // }

  ngOnInit() {
    this.obtenerUsuarios();
  }
  openDialog(){
    let dialogRef= this.dialog.open(NuevoUsuarioPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        username: "Natalia",
        userId: 5
      }
    });
  }

  obtenerUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      (res)=>{
        this.varUsuarios=res.body as Usuarios[];
        console.log(this.varUsuarios);

      }
    )
  }

  editarUser(){
    console.log("Editando");
  }


}
