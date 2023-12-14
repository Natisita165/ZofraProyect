import { Component, OnInit, Input } from '@angular/core';
import { Mercaderia } from 'src/app/interface/mercaderia';
import { MercaderiaService } from 'src/app/services/mercaderia.service';
import Swal from 'sweetalert2';
import { NuevaMercaderiaPopUpComponent } from '../nueva-mercaderia-pop-up/nueva-mercaderia-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarMercaderiaPopUpComponent } from '../editar-mercaderia-pop-up/editar-mercaderia-pop-up.component';

@Component({
  selector: 'app-table-mercaderia',
  templateUrl: './table-mercaderia.component.html',
  styleUrls: ['./table-mercaderia.component.css']
})
export class TableMercaderiaComponent {
  varMercaderia: Mercaderia[]=[];
  
  file: any;
  errorMessage="";

  constructor(private mercaderiaService:MercaderiaService, private dialog: MatDialog){}

  ngOnInit() {
    this.obtenerPuntos();
  }

  obtenerPuntos(){
    this.mercaderiaService.getMercaderia().subscribe(
      (res)=>{
        this.varMercaderia=res.body as Mercaderia[];
        console.log(this.varMercaderia);

      }
    )
  }

  descargarDocs(idMercaderia: any){

    this.mercaderiaService.downloadFile(idMercaderia).subscribe(
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

  deleteMerc(idMercaderia:any) {
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
        this.mercaderiaService.deleteMerc(idMercaderia).subscribe(
          (res)=>{
            console.log("Mercaderia Eliminada: ", res);
            setTimeout('location.reload()',3000);
    
          },
          (error)=>{
            console.log("No se pudo eliminar", error);
            setTimeout('location.reload()',3000);
          }
        )

         Swal.fire({
           title: "ELIMINADO!",
           text: "La mercaderia ha sido eliminada",
           icon: "success"
         });
      }
    });
  }


  openDialog(){
    let dialogRef= this.dialog.open(NuevaMercaderiaPopUpComponent, {
      width: '50%',
    });
  }

  openEdition(idMercaderia: any){
    let dialogRef= this.dialog.open(EditarMercaderiaPopUpComponent, {
      width: '50%',
      //height: '50%',
      data: {
        id: idMercaderia
      }
    });
  }

}
