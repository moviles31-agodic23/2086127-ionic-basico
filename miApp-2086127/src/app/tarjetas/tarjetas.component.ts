import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {
  alumnos: string[] = []; 
  tarjetas: any[] = []; 

  constructor(private router: Router) {}

  ngOnInit() {
    
    this.alumnos = ['Gloria Ostos', 'Melissa Ostos', 'Raquel Martinez', 'Jose Padron', 'Marlen', 'Moserrath'];
    this.tarjetas = [
      {
        nombre: 'Gloria Eulalia Ostos Soto',
        numero: 4519513307990830, 
        vigenciaInicio: '08',
        vigenciaFin: '27',
        CVV: '088'
      },
      {
        nombre: 'Melissa Anahi Ostos Soto',
        numero: '4519 5133 0799 0830', 
        vigenciaInicio: '08',
        vigenciaFin: '27',
        CVV: '088'
      },
      {
        nombre: 'Carlos Eduardo Torres Perez',
        numero: 4519513307990830, 
        vigenciaInicio: '08',
        vigenciaFin: '27',
        CVV: '088'
      }
    ];
  }

  navegarAAgregarTarjetas() {
    this.router.navigate(['/agregar-tarjetas']);
  }
}

