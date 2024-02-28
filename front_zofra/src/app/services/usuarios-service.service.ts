import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Usuarios } from '../interface/usuarios';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { Observable } from 'rxjs';
import { ImplicitReceiver } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor(private http: HttpClient) { }
  private Url: string = "http://localhost:8081";
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })

  login(user: Usuarios) {
    return this.http
      .post(this.Url + "/usuario/login", user, { observe: "response" })
  }

  getUsuarios() {
    return this.http
      .get(this.Url + "/usuario", { observe: "response" })

  }

  create(usuario: Usuarios) {
    return this.http.post(this.Url + "/usuario", usuario, { headers: this.httpHeaders });
  }

  deletUsuario(id: any) {
    return this.http.delete(
      this.Url + "/usuario/" + id, { observe: "response" }
    )
  }


  getUsuariosById(id: any) {
    return this.http
      .get(this.Url + "/usuario/" + id, { observe: "response" })

  }

  editarUsuario(usuario:Usuarios, id:any){
    return this.http.put(
      this.Url+"/usuario/"+id,
      usuario,
      {headers:this.httpHeaders}
    )
  }
  
  editarUsuarioContrasenia(usuario:Usuarios, id:any){
    return this.http.put(
      this.Url+"/usuario/passChange/"+id,
      usuario,
      {headers:this.httpHeaders}
    )
  }
}
