import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Documento } from '../interface/documento';
import { Poliza } from '../interface/poliza';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  getPoliza(){
    return this.http
    .get(this.Url+"/poliza",{observe:"response"})
  
  }

  createPoliza(poliza:Poliza){
    console.log(poliza);
    return this.http
    .post(
      this.Url+"/poliza", poliza,
      {headers:this.httpHeaders}
    )
  }

  deletePoliza(id:any){
    return this.http.delete(
      this.Url+"/poliza/"+id, {observe:"response"}
    )
  }

  uploadFile(formData:any,id:any){
    return this.http.put(
      this.Url+"/poliza/file/"+id,
      formData    )
  }

  downloadFile(id: any){
    return this.http.get<Blob>(
      this.Url + "/poliza/file/" + id, {observe:"body", responseType: "blob" as "json"}
    );
  }

  editarPoliza(poliza:Poliza, id:any){
    return this.http.put(
      this.Url+"/poliza/"+id,
      poliza,
      {headers:this.httpHeaders}
    )
  }

  getPolizaById(id:any){
    return this.http
    .get(this.Url+"/poliza/"+id,{observe:"response"})
  
  }
}
