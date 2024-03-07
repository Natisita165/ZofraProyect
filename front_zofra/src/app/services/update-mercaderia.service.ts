import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateMercaderiaService {

  constructor(private http:HttpClient) { }

  private Url:string="http://localhost:8081";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})



  downloadFile(id: any){
    return this.http.get<Blob>(
      this.Url + "/updatemercaderia/file/" + id, {observe:"body", responseType:"blob" as "json"}
    );
  }

  getMercaderiaUdatedByID(id:any){
    return this.http
    .get(this.Url+"/updatemercaderia/historial/"+id,{observe:"response"})
  
  }

}
