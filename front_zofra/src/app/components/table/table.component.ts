import { Component, OnInit, Input } from '@angular/core';
import { Documento } from 'src/app/interface/documento';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  varDocs: Documento[]=[];

  constructor(private documentoService:DocumentoService){}

  ngOnInit() {
    this.obtenerDocumentos();
  }

  obtenerDocumentos(){
    this.documentoService.getDocumentos().subscribe(
      (res)=>{
        this.varDocs=res.body as Documento[];
        console.log(this.varDocs);

      }
    )
  }

  descargarDocs(){
    console.log("Descragar");
  }

  

}
