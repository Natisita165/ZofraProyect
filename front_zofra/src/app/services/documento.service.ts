import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Documento } from '../interface/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  getDocumentos(){
    return this.http
    .get(this.Url+"/documento",{observe:"response"})
  }

  createDocumento(documento: Documento){
    return this.http.post(
      this.Url + "/documento",
      documento,
      {headers:this.httpHeaders}
    );
  }

  editarDocumento(documento: Documento, id:any){
    return this.http.put(
      this.Url+"/documento/"+id,
      documento,
      {headers:this.httpHeaders}
    )
  }
  getDocumentoById(id:any){
    return this.http
    .get(this.Url+"/documento/"+id,{observe:"response"})
  
  }

  getDocumentoLock(){
    return this.http
    .get(this.Url+"/documento/publico",{observe:"response"})
  
  }



  uploadFile(formData: any, id: any){
    return this.http.put(
      this.Url + "/documento/file/" + id,
      formData
    );
  }

  downloadFile(id: any){
    return this.http.get<Blob>(
      this.Url + "/documento/file/" + id, {observe:"body", responseType:"blob" as "json"}
    );
  }

  deleteDoc(id:any){
    return this.http.delete(
      this.Url+"/documento/"+id, {observe:"response"}
    )
  }
}
