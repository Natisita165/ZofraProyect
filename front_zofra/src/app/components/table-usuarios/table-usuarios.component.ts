import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';
import { MatDialog} from '@angular/material/dialog';
import { NuevoUsuarioPopUpComponent } from '../nuevo-usuario-pop-up/nuevo-usuario-pop-up.component';
import Swal from 'sweetalert2';
import { EditarUsuarioPopUpComponent } from '../editar-usuario-pop-up/editar-usuario-pop-up.component';

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
  openDialogUser(){
    let dialogRef= this.dialog.open(NuevoUsuarioPopUpComponent, {
      width: '50%',
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

 


  deleteUser(idUsuarios:any) {
    Swal.fire({
      title: "Eliminar registro?",
      text: "No podrás deshacer esta opción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Eliminando registro...");

        this.usuariosService.deletUsuario(idUsuarios).subscribe(
          (res)=>{
            console.log("Documento Eliminada: ", res);
            location.reload();
             
    
          },
          (error)=>{
            console.log("No se pudo eliminar", error);
            location.reload();

          }
        )
         Swal.fire({
           title: "Deleted!",
           text: "Your file has been deleted.",
           icon: "success"
         });
      }
    });
  }


  editarUser(idUsuarios:any){
    let dialogRef= this.dialog.open(EditarUsuarioPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        id: idUsuarios
      }
    });
  }
}
