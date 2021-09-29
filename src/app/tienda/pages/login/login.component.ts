import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .margin-t{
      margin-top: 60px;
      margin-bottom: 60px;
    }

    .margin-b{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    `
  ]
})
export class LoginComponent implements OnInit {

  email:string='';
  clave:string='';

  login():void{
    console.log("El email a ingresar es: "+this.email);
    console.log("La clave ingresada es: "+this.clave);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
