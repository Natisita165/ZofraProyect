import { Component, OnInit } from '@angular/core';
import { PuntosControl } from 'src/app/interface/puntos-control';
import { PuntosControlService } from 'src/app/services/puntos-control.service';
import { TablaPuntosPopUpComponent } from '../tabla-puntos-pop-up/tabla-puntos-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-puntos-control',
  templateUrl: './puntos-control.component.html',
  styleUrls: ['./puntos-control.component.css']
})
export class PuntosControlComponent implements OnInit{
  distributedPuntos:any = [[]];
  // puntos = ["Punto uno", "Punto dos superrequetelargosupinshinombre", "punto tres"];
  puntos: PuntosControl[]=[];

  constructor(private puntosControlService: PuntosControlService, private dialog: MatDialog){}
  
  obtenerPuntos(){
    this.puntosControlService.getPuntos().subscribe(
      (res)=>{
        this.puntos=res.body as  PuntosControl[];
        console.log(this.puntos);
        this.computeDistributedPuntos(this.puntos,3);
        console.log(this.distributedPuntos);
      }
    )
  }
  
  ngOnInit(): void {
    this.obtenerPuntos();
  }

  computeDistributedPuntos(arr: any, itemsPerRow: number){
    let R = [];
    for(let i = 0, len = arr.length; i<len; i+=itemsPerRow){
      R.push(arr.slice(i, i+itemsPerRow));
    }
    this.distributedPuntos = R;
  }

  abrirTabla(){
    let dialogRef= this.dialog.open(TablaPuntosPopUpComponent, {
      width: '50%',
    });
  }

}
