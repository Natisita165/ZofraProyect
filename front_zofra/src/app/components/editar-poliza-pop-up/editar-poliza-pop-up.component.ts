import { Component, Inject, OnInit  } from '@angular/core';
import { Poliza } from 'src/app/interface/poliza';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PolizaService } from 'src/app/services/poliza.service';

@Component({
  selector: 'app-editar-poliza-pop-up',
  templateUrl: './editar-poliza-pop-up.component.html',
  styleUrls: ['./editar-poliza-pop-up.component.css']
})
export class EditarPolizaPopUpComponent {
  varPoliza: Poliza={};
  id = -1;
  file: any;
  withFile = false;
  errorMessage = "";
  poliza:Poliza={};

  constructor(
    public dialogRef: MatDialogRef<EditarPolizaPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private polizaService: PolizaService
  ) {
    console.log("data recibida", data);
    this.id = data.id;
  }

  onCreate() {
    console.log("Creando instancia...")
  }
  updatePoli(data:any){
    console.log(data);
    console.log(this.file);
    this.poliza.codeP=data.txtCodigoP;
    this.poliza.areaP=data.txtAreaP;
    this.poliza.stateP=data.txtEstadoP;
    this.poliza.typeP=data.txtTipoP;


    console.log("data para actualizar: ", this.poliza);
    this.polizaService.editarPoliza(this.poliza, this.id).subscribe(
      (res) => {
        console.log(res);
        const response = res as Poliza;
        const insertID = response.idPoliza;

        if (this.withFile === true) {
          console.log("Editando archivo tambien")
          let formData = new FormData();
          formData.set("pdfD", this.file);
          this.polizaService.uploadFile(formData, insertID).subscribe(
            (res) => {
              console.log(res);
              this.dialogRef.close();
              location.reload();
            },
            (error) => {
              console.log(error);
              console.log("Entrando a la funcion de error");
              this.errorMessage = "Error con la subida de documento";
            }
          );
        }
        this.dialogRef.close();
              location.reload();
      },
      (error) => {
        console.log(error);
        console.log("Entrando a la funcion de error");
        this.errorMessage = "Error con la subida de documento 2";
      }
    );
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    this.withFile = true;
  }

  onCancel(event: any) {
    event.preventDefault();
    console.log("cerrando----");
    this.dialogRef.close();
    return;
  }

  obtenerPoliza() {
    this.polizaService.getPolizaById(this.id).subscribe(
      (res) => {
        this.varPoliza = res.body as Poliza;
        console.log("Poliza recibida:", this.varPoliza);
      }
    )
  }

  ngOnInit() {
    //this.updateMerc(this.mercaderia.idMercaderia);
    this.obtenerPoliza();
  }
}
