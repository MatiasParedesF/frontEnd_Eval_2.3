import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProductoComponent } from './tienda/pages/producto/producto.component';
import { RegistroComponent } from './tienda/pages/registro/registro.component';

const routes:Routes=[
  {
    path:'',
    component: RegistroComponent,
    pathMatch:'full'
  },
  {
    path:'producto',
    component: ProductoComponent
  },
  {
    path:'**',
    redirectTo:''
}
]

@NgModule({
  declarations:[],
  imports:[
    RouterModule.forRoot(routes)
],
  exports:[RouterModule],
})
export class AppRoutingModule { 


}
