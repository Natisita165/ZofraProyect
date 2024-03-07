import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/interface/documento';
import { DocumentoService } from 'src/app/services/documento.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-otros-docs',
  templateUrl: './table-otros-docs.component.html',
  styleUrls: ['./table-otros-docs.component.css']
})
export class TableOtrosDocsComponent implements OnInit{

  varOtherDocs: Documento[]=[];

  constructor(private documentoService:DocumentoService, private dialog: MatDialog){}

  ngOnInit() {
    this.obtenerOtrosDocumentos();
  }

  obtenerOtrosDocumentos(){
    this.documentoService.getDocumentoLock().subscribe(
      (res)=>{
        this.varOtherDocs=res.body as Documento[];
        console.log(this.varOtherDocs);

      }
    )
  }

  descargarDocsO(idDocumentos: any){
    console.log("Descargar");
    this.documentoService.downloadFile(idDocumentos).subscribe(
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

}
