import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { PuntosControl } from '../interface/puntos-control';

@Injectable({
  providedIn: 'root'
})
export class PuntosControlService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";


  getPuntos(){
    return this.http
    .get(this.Url+"/puntosControl",{observe:"response"})
  
  }
}
