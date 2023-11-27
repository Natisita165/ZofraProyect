import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnInit{
  varUsuarios: Usuarios[]=[];

  constructor(private usuariosService:UsuariosServiceService){}

  

  // openModel(){
  //   document.getElementById('crear-nuevo-usuario')?.style.display='block';
  // }

  ngOnInit() {
    this.obtenerUsuarios();
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
