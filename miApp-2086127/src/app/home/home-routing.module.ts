import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AgregarTarjetasComponent } from '../agregar-tarjetas/agregar-tarjetas.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'agregar-tarjetas', 
    component: AgregarTarjetasComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

