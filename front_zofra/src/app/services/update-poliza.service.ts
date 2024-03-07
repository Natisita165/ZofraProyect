import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatePolizaService {

  constructor(private http:HttpClient) { }

  private Url:string="http://localhost:8081";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})



  downloadFile(id: any){
    return this.http.get<Blob>(
      this.Url + "/updatepoliza/file/" + id, {observe:"body", responseType:"blob" as "json"}
    );
  }

  getolizaUdatedByID(id:any){
    return this.http
    .get(this.Url+"/updatepoliza/historial/"+id,{observe:"response"})
  
  }
}
