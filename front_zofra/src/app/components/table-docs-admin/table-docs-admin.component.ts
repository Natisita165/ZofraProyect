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

  descargarDocs(){
    console.log("Descargar");
  }


}
