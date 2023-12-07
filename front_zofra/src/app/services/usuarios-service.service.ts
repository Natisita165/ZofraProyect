import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Usuarios } from '../interface/usuarios';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import {Observable} from 'rxjs';
import { ImplicitReceiver } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";
  private UrlCreate:string="http://localhost:8081/usuario";
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  login(user:Usuarios){
    return this.http
    .post(this.Url+"/usuario/login",user,{observe:"response"})
  
  }

  getUsuarios(){
    return this.http
    .get(this.Url+"/usuario",{observe:"response"})
  
  }

  create(usuario:Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(this.UrlCreate,usuario,{headers:this.httpHeaders});
}

}
