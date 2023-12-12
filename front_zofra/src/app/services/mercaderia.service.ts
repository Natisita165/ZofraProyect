import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Mercaderia } from '../interface/mercaderia';

@Injectable({
  providedIn: 'root'
})
export class MercaderiaService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})


  getMercaderia(){
    return this.http
    .get(this.Url+"/mercaderia",{observe:"response"})
  
  }

  creatMercaderia(mercaderia: Mercaderia){
    console.log(mercaderia);
    return this.http
    .post(
      this.Url+"/mercaderia", mercaderia,
      {headers:this.httpHeaders}
    )
  }

  editarMercaderia(mercaderia: Mercaderia, id:any){
    return this.http.put(
      this.Url+"/mercaderia/"+id,
      mercaderia,
      {headers:this.httpHeaders}
    )
  }
  getMercaderiaById(id:any){
    return this.http
    .get(this.Url+"/mercaderia/"+id,{observe:"response"})
  
  }

  uploadFile(formData:any,id:any){
    return this.http.put(
      this.Url+"/mercaderia/file/"+id,
      formData    )
  }

  // let downloadHeaders=new HttpHeaders({
  //   "Content-Type": "application/json",
  //   responseType: "blob"
  // });

  downloadFile(id: any){
    return this.http.get<Blob>(
      this.Url + "/mercaderia/file/" + id, {observe:"body", responseType: "blob" as "json"}
    );
  }


  deleteMerc(id:any){
    return this.http.delete(
      this.Url+"/mercaderia/"+id, {observe:"response"}
    )
  }
}
