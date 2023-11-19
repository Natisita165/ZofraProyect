import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  userName?: string;
  date?: string;

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
  }

}
