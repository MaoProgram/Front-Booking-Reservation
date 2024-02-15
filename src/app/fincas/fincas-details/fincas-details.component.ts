// fincas-details.component.ts
import { Component } from '@angular/core';
import { FincasService } from '../fincas.service'; 
import { ReservationsService } from 'src/app/services/reservation.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-fincas-details',
  templateUrl: './fincas-details.component.html',
  styleUrls: ['./fincas-details.component.scss'],
})
export class FincasDetailsComponent {
  hayReservaciones: boolean = false;
  reserva: any;
  reservaciones: any;

  constructor(
    private fincasService: FincasService,
    private reservationsService: ReservationsService,
    private router: Router
  ) {}

  home(){this.router.navigate(['/fincas'])}
  yourReservaciones(){this.router.navigate(['fincaDetails/id'])}
  salir(){this.router.navigate(['login'])}
  informacion(){this.router.navigate(['fincaEdit'])}
  actualizarReserva(datosReserva: any) {
    this.reserva = datosReserva;
    this.hayReservaciones = true;

  }
}

