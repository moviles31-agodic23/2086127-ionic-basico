import { Component } from '@angular/core';
import { TarjetaService } from '../tarjeta.service';


@Component({
  selector: 'app-agregar-tarjetas',
  templateUrl: './agregar-tarjetas.component.html',
  styleUrls: ['./agregar-tarjetas.component.scss'],
})
export class AgregarTarjetasComponent {
  tarjeta = {
    numero: '',
    nombre: '',
    vencimiento: '',
    ccv: '',
  };

  constructor(private tarjetaService: TarjetaService) {}

  agregarTarjeta() {
    // Obtén los datos del formulario desde this.tarjeta
    // Por ejemplo:
    const nuevaTarjeta = {
      numero: this.tarjeta.numero,
      nombre: this.tarjeta.nombre,
      vencimiento: this.tarjeta.vencimiento,
      ccv: this.tarjeta.ccv
    };

    // Llama al servicio para agregar la tarjeta
    this.tarjetaService.agregarNuevaTarjeta(nuevaTarjeta);

    // Limpia el formulario o realiza otras acciones necesarias
    this.tarjeta = {
      numero: '',
      nombre: '',
      vencimiento: '',
      ccv: ''
    };
  }
}



