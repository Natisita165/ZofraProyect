import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/interface/documento';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'app-table-docs-admin',
  templateUrl: './table-docs-admin.component.html',
  styleUrls: ['./table-docs-admin.component.css']
})
export class TableDocsAdminComponent implements OnInit{
  varDocsAdmin: Documento[]=[];

  constructor(private documentoService:DocumentoService){}

  ngOnInit() {
    this.obtenerDocumentosAdmin();
  }

  obtenerDocumentosAdmin(){
    this.documentoService.getDocumentos().subscribe(
      (res)=>{
        this.varDocsAdmin=res.body as Documento[];
        console.log(this.varDocsAdmin);

      }
    )
  }

  descargarDocsAdmin(idDocumentos:any){
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
