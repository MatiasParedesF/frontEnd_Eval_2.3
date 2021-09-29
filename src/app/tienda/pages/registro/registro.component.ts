import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: string ="";
  email: string ="";
  telefono: string ="";
  usuario2: string ="";
  email2: string ="";
  telefono2: string ="";
  
  mensaje:string="";

  constructor() { }

  ngOnInit(): void {
  }

  insertarRegistro():void{

    console.log("Metodo Insertar ...");
    console.log("Codigo: "+this.usuario);
    console.log("Nombre: "+this.email);
    console.log("Precio: "+this.telefono);

    if(this.validarUsuario() && 
      this.validateEmail(this.email) && 
      this.validateLength(this.email,20,4) && 
      this.validateTelefono(this.telefono) &&
      this.validateEspacios(this.telefono) &&
      this.validateEspacios(this.usuario) &&
      this.validateEspacios(this.email) &&
      this.validateLength(this.telefono,10,10))
    {
      this.mensaje=""
      this.usuario2=this.usuario;
      this.email2=this.email;
      this.telefono2=this.telefono.substring(0,3)+"-"+this.telefono.substring(3,6)+"-"+this.telefono.substring(6,10);
    }
  }

    //Validaciones

    validarUsuario(): boolean|undefined{
      var validate=true;
      if(this.usuario.trim().length == 0){
        this.mensaje="El campo usuario no puede estar vacio";
        validate = false;
      }
      else if(this.usuario.length < 4 || this.usuario.length > 10){
        this.mensaje="Usuario debe tener maximo 10 caracteres y minimo 4";
        validate = false;
      }
      else{
        console.log("Usuario: "+ this.usuario);
        validate = true;
      }
      return validate;
    }

    validateLength(valor:string,maxLength:number,minLength:number)
    {
      var validate = true;
      if(valor.trim().length < minLength)
      {
        this.mensaje=valor+" debe tener minimo "+minLength+" caracteres";
        console.log("Bad minLength or null");
        validate = false;
      }
      if(valor.trim().length > maxLength)
      {
        this.mensaje=valor+" debe tener maximo "+maxLength+" caracteres";
        console.log("Bad maxLength");
        validate = false;
      }
      return validate;
    }
  
    validateEmail(correo:string) {
      var pattern  = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      var validate = true;
      
      if (!pattern.test(correo)) 
      {
        this.mensaje="Caracteres del correo invalido";
        console.log("Bad email");
        validate =  false;
      }
      return validate
    }
  
    validateTelefono(telefono:string) { 
      var pattern  = new RegExp(/^([0-9])*$/); 
      var validate = true;
      if (!pattern.test(telefono)) 
      {
        this.mensaje="Caracteres del telefono invalidos";
        console.log("Bad telefono");
        validate =  false;
      }
      return validate
    }

    validateEspacios(valor:string){
      var espacios = false;
      var cont = 0;
      var validate = true;
      
      if(valor.indexOf(" ")!=-1)
      {
        this.mensaje=valor+" contiene espacios";
        console.log("Bad espacios");
        validate=false;
      }
      return validate;
    }
    
}
