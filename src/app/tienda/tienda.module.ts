import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { RegistroComponent } from './pages/registro/registro.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    ProductoComponent
  ],
  exports:[
    RegistroComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})

export class TiendaModule { }
