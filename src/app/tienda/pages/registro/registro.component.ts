import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
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

    if(this.validarUsuario()){
      console.log("Codigo: "+this.usuario);
      console.log("Nombre: "+this.email);
      console.log("Precio: "+this.telefono);
    }
    else{
      console.log("La validacion no es correcta")
    }

    this.validateEmail(this.email)
    this.validateEspacios(this.email)
    this.validateTelefono(this.telefono)

    this.usuario2=this.usuario;
    this.email2=this.email;
    this.telefono2=this.telefono;
  }


    //Validaciones

    validarUsuario(): boolean|undefined{
      if(this.usuario.trim().length == 0){
        this.mensaje="El campo usuario no puede estar vacio";
        return false;
      }
      else if(this.usuario.length < 4 || this.usuario.length > 10){
        this.mensaje="Maximo 10 caracteres y minimo 4";
        return false;
      }
      else{
        console.log("Usuario: "+ this.usuario);
        return true;
      }
    }

    validateLength(valor:string,maxLength:number,minLength:number)
    {
      var validate = true;
      if(valor.trim().length < minLength)
      {
        console.log("Bad minLength or null");
        validate = false;
      }
      if(valor.trim().length > maxLength)
      {
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
        console.log("Bad email");
        validate =  false;
      }
      return validate
    }
  
    validateTelefono(telefono:string) {
      var pattern  = new RegExp(/^[1-9]\d{6,10}$/);
      var validate = true;
      if (!pattern.test(telefono)) 
      {
        console.log("Bad telefono");
        validate =  false;
      }
      return validate
    }

    validateEspacios(valor:string){
      var espacios = false;
      var cont = 0;
      var validate = true;
      if (valor.length!=0)
      {
        while (!espacios && (cont < valor.length)) 
        {
          if (valor.charAt(cont) == " ")
          { 
            espacios = true;
            cont++;
          }
        }
        
        if (espacios) 
        { 
          alert ("Bad espacios en blanco"); 
          validate = false; 
        }
      }
      return validate;
    }
    

}
