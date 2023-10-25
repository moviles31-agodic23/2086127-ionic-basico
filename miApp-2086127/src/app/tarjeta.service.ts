import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private tarjetas: any[] = [];

  constructor() {}

  agregarNuevaTarjeta(tarjeta: any) {
    this.tarjetas.push(tarjeta);
  }

  obtenerTarjetas() {
    return this.tarjetas;
  }
}

