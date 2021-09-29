import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  email:string='';
  clave:string='';

  login():void{
    console.log("El email a registrar es: "+this.email);
    console.log("La clave ingresada es: "+this.clave);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
