import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CambiarPassPopUpComponent } from '../cambiar-pass-pop-up/cambiar-pass-pop-up.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  cargandoValidacion: boolean=false;

  constructor(
    private usuariosService:UsuariosServiceService, 
    private router:Router,
    private dialog: MatDialog
  ){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  usuario: Usuarios={};
  usuarioResponse: Usuarios={};
  errorMessage='';
  

  get user(){
    return this.formUser.get('user') as FormControl;
  }

  get paswords(){
    return this.formUser.get('passwords') as FormControl;
  }

formUser = new FormGroup({
  'user': new FormControl('', Validators.required),
  'passwords': new FormControl('', Validators.required)
});




procesar(data:any){
  console.log(data);
  this.usuario.user=data.user;
  this.usuario.passwords=data.passwords;
  this.usuario.first=false;
  console.log(this.usuario);

  
  
  this.usuariosService.login(this.usuario).subscribe(
    (res)=>{
      console.log(res);
      console.log(res.status);
      this.usuarioResponse=res.body!;
      console.log("usuario recibido", this.usuarioResponse)
      //let idUsuarios = res.body!.idUsuarios;
      if (res.status===200){
        console.log("Guardando usuario y accediendo");
        this.errorMessage = "Ingresaste correctamente";
        localStorage.setItem("id",this.usuarioResponse.idUsuarios!.toString());
        localStorage.setItem("area",this.usuarioResponse.area!.toString());
        localStorage.setItem("name",this.usuarioResponse.name!.toString());
        localStorage.setItem("lastname",this.usuarioResponse.lastname!.toString());
        localStorage.setItem("first", this.usuarioResponse.first!.toString());
        localStorage.setItem("username", this.usuarioResponse.user!.toString());
        localStorage.setItem("page","inicio");


        if(this.usuarioResponse.first === false || this.usuario.first === null){
          let dialogRef= this.dialog.open(CambiarPassPopUpComponent, {
            width: '50%',
          });
        }else{
          this.router.navigateByUrl('home');
        }
        

      // }else if(res.status===404){
      //   console.log("Datos incorrectos");
      //   this.errorMessage = "Error con el inicio de sesion";
      // }
      }
    },
    (error)=>{
      console.log(error);
      console.log("Entrando a la funcion de error");
      this.errorMessage = "Error con el inicio de sesion";
      
      
    }
    

  );



 
}

/*username= new FormControl('', Validators.required);
password= new FormControl('', Validators.required);*/ 




}
