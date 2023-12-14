import { Component } from '@angular/core';
import { Mercaderia } from 'src/app/interface/mercaderia';
import { MercaderiaService } from 'src/app/services/mercaderia.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs

@Component({
  selector: 'app-tabla-puntos-pop-up',
  templateUrl: './tabla-puntos-pop-up.component.html',
  styleUrls: ['./tabla-puntos-pop-up.component.css']
})
export class TablaPuntosPopUpComponent {
  meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre", "Octubre","Noviembre","Diciembre"];

  varMercaderia: Mercaderia[] = [];
  dataToShow: any[] = [];
  constructor(private mercaderiaService: MercaderiaService) { }

  descargarMes(){
    console.log("descargado");
    this.crearPDF();

  }


  ngOnInit() {
    this.getMercaderia();
  }

  getMercaderia() {
    this.mercaderiaService.getMercaderia().subscribe(
      (res) => {
        this.varMercaderia = res.body as Mercaderia[];
        console.log(this.varMercaderia);
        this.preProcessData();
      }
    )
  }

  preProcessData() {
    this.dataToShow.push(
      [
        { text: "Nombre Mercaderia", style: "tableHeader", alignment: "center" },
        { text: "Importador", style: "tableHeader", alignment: "center" },
        { text: "Precio", style: "tableHeader", alignment: "center" },
        { text: "Cantidad", style: "tableHeader", alignment: "center" },
        { text: "Tipo", style: "tableHeader", alignment: "center" },
      ],
    )
    for (let merc of this.varMercaderia) {
      this.dataToShow.push([merc.nameMerc, merc.importer, merc.price, merc.quantity, merc.type]);
    }
    //console.log("preprocess", this.dataToShow);
  }

  crearPDF() {
    const definition: any = {
      content: [
        { text: "Reporte Mensual", style: "header" },
        {
          widths: ["*", "*", "*", "*", "*"],
          headerRows: 1,
          table: {
            body: this.dataToShow
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }
    };

    const pdf = pdfMake.createPdf(definition);
    pdf.open();
  }
}


