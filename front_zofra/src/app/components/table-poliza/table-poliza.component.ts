import { Component } from '@angular/core';
import { Poliza } from 'src/app/interface/poliza';
import { PolizaService } from 'src/app/services/poliza.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevaPolizaPopUpComponent } from '../nueva-poliza-pop-up/nueva-poliza-pop-up.component';
import Swal from 'sweetalert2';
import { EditarPolizaPopUpComponent } from '../editar-poliza-pop-up/editar-poliza-pop-up.component';
import { UpdatePolizaPopUpComponent } from '../update-poliza-pop-up/update-poliza-pop-up.component';

@Component({
  selector: 'app-table-poliza',
  templateUrl: './table-poliza.component.html',
  styleUrls: ['./table-poliza.component.css']
})
export class TablePolizaComponent {

  varPoliza: Poliza[]=[];

  constructor(private polizaService:PolizaService, private dialog: MatDialog){}

  ngOnInit() {
    this.obtenerPoliza();
  }

  obtenerPoliza(){
    this.polizaService.getPoliza().subscribe(
      (res)=>{
        this.varPoliza=res.body as Poliza[];
        console.log(this.varPoliza);

      }
    )
  }

  descargarDocsPoli(idPoliza:any){
    console.log("Descragar");
    this.polizaService.downloadFile(idPoliza).subscribe(
      (data:Blob)=>{
        var file=new Blob([data],{type:"application/pdf"});
        var fileUrl=URL.createObjectURL(file);

        //ABRI UNA NUEVA PESTANIA
        window.open(fileUrl);
        var a=document.createElement("a");
        a.href=fileUrl;
        a.target="_blank";
        a.download="name.pdf";
        document.body.appendChild(a);
        a.click();


        // console.log("Respuesta");
        // console.log(res);
        
      },
      (error)=>{
        console.log(error);
        console.log("Entrando a la funcion de error2");
        
      }
    )
  }
  openDialog(){
    let dialogRef= this.dialog.open(NuevaPolizaPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        username: "Natalia",
        userId: 5
      }
    });
  }

  deletePoli(idPoliza: any) {
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
        this.polizaService.deletePoliza(idPoliza).subscribe(
          (res)=>{
            console.log("Poliza Eliminada: ", res);
            setTimeout('location.reload()',3000);
    
          },
          (error)=>{
            console.log("No se pudo eliminar", error);
            setTimeout('location.reload()',3000);

          }
        )

         Swal.fire({
           title: "¡ELIMINADO!",
           text: "La Poliza ha sido eliminada",
           icon: "success"
         });
      }
    });
  }
  openEditionPoli(idPoliza: any){
    let dialogRef= this.dialog.open(EditarPolizaPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        id: idPoliza
      }
    });
  }
  openDialogDocUpdate(idDocumentos:any){
    let dialogRef= this.dialog.open(UpdatePolizaPopUpComponent, {
      width: '50%',
      data: {
        id: idDocumentos
      }
    });
  }
}
