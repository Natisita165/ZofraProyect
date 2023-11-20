import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Documento } from '../interface/documento';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";

  getPoliza(){
    return this.http
    .get(this.Url+"/poliza",{observe:"response"})
  
  }
}
