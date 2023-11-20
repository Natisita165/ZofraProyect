import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MercaderiaService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";

  getMercaderia(){
    return this.http
    .get(this.Url+"/mercaderia",{observe:"response"})
  
  }
}
