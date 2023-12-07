import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-nuevo-documento-pop-up',
  templateUrl: './nuevo-documento-pop-up.component.html',
  styleUrls: ['./nuevo-documento-pop-up.component.css']
})
export class NuevoDocumentoPopUpComponent {
  username = "";
  id = -1;
  
  constructor(
    public dialogRef: MatDialogRef<NuevoDocumentoPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.username = data.username;
    this.id = data.userId;
  }

  onCreate(){
    console.log("Creando instancia...")
  }
  
  onCancel(){
    console.log("Cerrando panel");
    this.dialogRef.close();
  }

}
