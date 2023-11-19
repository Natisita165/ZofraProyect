import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Usuarios } from '../interface/usuarios';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor(private http:HttpClient) { }
  private Url:string="http://localhost:8081";

  login(user:Usuarios){
    return this.http
    .post(this.Url+"/usuario/login",user,{observe:"response"})
  
  }

}
