import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  codigo: number=0;
  nombre: string="";
  precio: number=0;
  stock: number=0;
  
  lista_productos: Producto[] = [];

  productito: Producto={
    "codigo": 0,
    "nombre": "",
    "precio": 0,
    "stock":0
  }
  
  insertarProducto():void{
    console.log("Método Insertar ...");
    console.log("Codigo: "+this.codigo);
    console.log("Nombre: "+this.nombre);
    console.log("Precio: "+this.precio);
    console.log("Stock: "+this.stock);
    
    if(this.camposValidados()){
      this.productito={
        "codigo": this.codigo,
        "nombre": this.nombre,
        "precio": this.precio,
        "stock": this.stock
      }
  
      console.log("productito: ",this.productito);
      this.lista_productos.push(this.productito);
      
      console.log("lista_productos: ",this.lista_productos);
      console.log("-----------");
    }
  }

  camposValidados(): boolean{
    if(this.camposNumberNull(this.codigo)
      && this.camposStringNull(this.nombre) ){
        console.log("Campos Validados");
      return true;
    }
    return false;
  }

  camposNumberNull(num:number): boolean{
    if(num>0){
      return true;
    }
    console.log("se debe ingresar un campo mayor a 0");
    return false;
  }

  camposStringNull(str:string): boolean{
    if(str.trim().length == 0){
      console.log("El campo nombre no puede estar vacio");
      return false;
    }
    return true;
  }

}
