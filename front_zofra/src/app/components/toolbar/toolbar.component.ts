import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CambiarPassPopUpComponent } from '../cambiar-pass-pop-up/cambiar-pass-pop-up.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  userName?: string;
  date?: string;

  constructor(
    private router:Router,
    private dialog: MatDialog
  ){
    
  }

  ngOnInit(): void {
    this.getNameAndDate();
  }

  getNameAndDate(){
    let name = localStorage.getItem("name")!;
    let lastname = localStorage.getItem("lastname")!;
    this.userName = name + " " + lastname;
    this.date = new Date().toLocaleDateString();
  }
  
  handleLogoutClick(){
    console.warn("Cerrando sesión...");
    console.warn("Redirigiendo a Login...");
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  changePass(){
    let dialogRef= this.dialog.open(CambiarPassPopUpComponent, {
      width: '50%',
    });
    console.log("cambiar contrasenia");
  }
}
