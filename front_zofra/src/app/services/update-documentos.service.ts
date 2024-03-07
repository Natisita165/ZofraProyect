import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateDocumentosService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})



  getDocumentoUdatedByID(id:any){
    return this.http
    .get(this.Url+"/updatedocumento/historial/"+id,{observe:"response"})
  
  }

  downloadFile(id: any){
    return this.http.get<Blob>(
      this.Url + "/updatedocumento/file/" + id, {observe:"body", responseType:"blob" as "json"}
    );
  }

}
