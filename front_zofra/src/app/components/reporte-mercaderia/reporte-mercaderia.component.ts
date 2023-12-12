import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(<any>pdfMake).vfs=pdfFonts.pdfMake.vfs

@Component({
  selector: 'app-reporte-mercaderia',
  templateUrl: './reporte-mercaderia.component.html',
  styleUrls: ['./reporte-mercaderia.component.css']
})
export class ReporteMercaderiaComponent {

  crearPDF(){
    const definition:any={
      content:["Hello World"]
    };

    const pdf=pdfMake.createPdf(definition);
    pdf.open();
  }

}
