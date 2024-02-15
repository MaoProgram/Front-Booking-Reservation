import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fincas-edit',
  templateUrl: './fincas-edit.component.html',
  styleUrls: ['./fincas-edit.component.scss']
})
export class FincasEditComponent {

  constructor(
    
    private router: Router
  ) {}

  home(){this.router.navigate(['/fincas'])}
  yourReservaciones(){this.router.navigate(['fincaDetails/id'])}
  salir(){this.router.navigate(['login'])}
  informacion(){this.router.navigate(['fincaEdit'])}
}
