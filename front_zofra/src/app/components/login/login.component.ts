import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuarios } from 'src/app/interface/usuarios';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  cargandoValidacion: boolean=false;

  constructor(private usuariosService:UsuariosServiceService, private http: HttpClient){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  usuario: Usuarios={};
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


validarCampos(): void {
  this.cargandoValidacion = true; // Nuevo: establecemos la variable de carga a true
  const datosValidar = { // Creamos el objeto con los datos a validar
    user: this.user.value,
    paswords: this.paswords.value
  };
  this.http.post('/api/validacion', datosValidar)
    .subscribe(
      () => {
        this.cargandoValidacion = false; // Nuevo: establecemos la variable de carga a false
        this.formUser.setErrors(null); // Nuevo: establecemos los errores del formulario a null
      },
      (error) => {
        this.cargandoValidacion = false; // Nuevo: establecemos la variable de carga a false
        if (error.status === 404) {
 this.formUser.setErrors({ servidor: true }); // Nuevo: establecemos un error general en el formulario
        }
      }
    );
}


procesar(data:any){
  console.log(data);
  this.usuario.user=data.user;
  this.usuario.passwords=data.passwords;
  console.log(this.usuario);

  
  


  this.usuariosService.login(this.usuario).subscribe(
    (res)=>{
      console.log(res);
      console.log(res.status);
      if (res.status===200){
        console.log("Guardando usuario y accediendo");
        this.errorMessage = "Ingresaste correctamente";
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
