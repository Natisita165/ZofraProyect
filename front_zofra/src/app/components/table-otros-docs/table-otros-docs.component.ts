import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/interface/documento';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'app-table-otros-docs',
  templateUrl: './table-otros-docs.component.html',
  styleUrls: ['./table-otros-docs.component.css']
})
export class TableOtrosDocsComponent implements OnInit{

  varOtherDocs: Documento[]=[];

  constructor(private documentoService:DocumentoService){}

  ngOnInit() {
    this.obtenerOtrosDocumentos();
  }

  obtenerOtrosDocumentos(){
    this.documentoService.getDocumentos().subscribe(
      (res)=>{
        this.varOtherDocs=res.body as Documento[];
        console.log(this.varOtherDocs);

      }
    )
  }

  descargarDocs(){
    console.log("Descargar");
  }

}
