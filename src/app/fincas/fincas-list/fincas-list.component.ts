import { Component, Renderer2 } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { ReservaDialogComponent } from 'src/app/reserva-dialog/reserva-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fincas-list',
  templateUrl: './fincas-list.component.html',
  styleUrls: ['./fincas-list.component.scss'],
})
export class FincasListComponent {
  
  
  fincas = [
    {
      nombre: 'El Manglar',
      imagen:
        'https://i.pinimg.com/originals/37/90/cd/3790cdfaf9b90e88fbd3f4d45f032b6d.jpg',
      Descripcion: 'Exuberante finca rodeada de manglares y naturaleza virgen, perfecta para escapadas tranquilas y actividades al aire libre.',
      claseNombre: 'clase-nombre',
      claseDescripcion: 'clase-descripcion',
      claseUbicacion: 'clase-ubicacion',
      claseCapacidad: 'clase-capacidad',
      clasePrecio: 'clase-precio',
      Ubicacion: 'Bahía Solangue, Chocó, Colombia.',
      Capacidad: 'Hasta 12 personas.',
      Precio: ' 800.000 COP por noche.'


    },
    {
      nombre: 'Flora Real',
      imagen:
        'https://asoaturquindio.com/wp-content/uploads/Casa-Campo-Valle-de-Cocora/386-casa-valle-de-cocra-24.jpg',
      Descripcion: 'Encantadora finca con jardines floridos y vistas panorámicas a las montañas, ideal para retiros familiares o reuniones íntimas.',
      Ubicacion: 'Valle de Cocora, Quindío, Colombia.',
      Capacidad: 'Hasta 10 personas',
      Precio: ' 700.000 COP por noche.',
    },
    {
      nombre: 'Tres Arroyos',
      imagen:
        'https://pics.nuroa.com/alquiler_de_hermosa_finca_en_la_vega_cundinamarca_3230008684237288720.jpg',
      Descripcion: 'Espaciosa finca rodeada de arroyos cristalinos, ofrece un entorno para disfrutar en familia.',
      Ubicacion: 'La Vega, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 15 personas.',
      Precio: ' 900.000 COP por noche.',
    },
    {
      nombre: 'Villa María',
      imagen:
        'https://multimedia.metrocuadrado.com/920-M4032686/920-M4032686_16_p.jpg',
      Descripcion: 'Acogedora finca con hermosos jardines y piscina privada, perfecta para escapar del bullicio de la ciudad y relajarse en un ambiente campestre.',
      Ubicacion: 'Villa de Leyva, Boyacá, Colombia.',
      Capacidad: 'Hasta 8 personas.',
      Precio: ' 600.000 COP por noche.',
    },
    {
      nombre: 'Rancho Los Álamos',
      imagen:
        'https://multimedia.metrocuadrado.com/MC4616668/MC4616668_18_p.jpg',
      Descripcion: 'Rancho tradicional con amplios espacios al aire libre y vistas a la cordillera, ideal para eventos sociales y actividades al aire libre.',
      Ubicacion: 'Suesca, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 20 personas.',
      Precio: ' 1.200.000 COP por noche.',
    },
    {
      nombre: 'Quinta El Arenal',
      imagen:
        'https://depaseoenfincas.com/wp-content/uploads/2023/04/WhatsApp-Image-2020-02-15-at-2.29.54-PM-1-1024x768.jpeg',
      Descripcion: 'Quinta encantadora con áreas verdes extensas y piscina privada, ofrece un ambiente acogedor para disfrutar en familia o con amigos.',
      Ubicacion: 'Villeta, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 12 personas.',
      Precio: ' 850.000 COP por noche.',
    },
    {
      nombre: 'Terra Viva',
      imagen:
        'https://multimedia.metrocuadrado.com/2571-M4681570/2571-M4681570_1_p.jpg',
      Descripcion: 'Finca ecológica con huertas orgánicas y senderos naturales, perfecta para estar en contacto con la naturaleza.',
      Ubicacion: 'San Gil, Santander, Colombia.',
      Capacidad: 'Hasta 16 personas.',
      Precio: ' 950.000 COP por noche.',
    },
    {
      nombre: 'Quinta Caracoles Dorados',
      imagen:
        'https://www.bienesonline.com/colombia/photos/venta-permutafinca-cajica-1900mm3157256032-FIV1826001581441448-195.jpg',
      Descripcion: 'Quinta elegante con espacios al aire libre y jardines exuberantes, ideal para eventos especiales y celebraciones familiares.',
      Ubicacion: 'Cajicá, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 25 personas.',
      Precio: '1.500.000 COP por noche.',
    },
    {
      nombre: 'Quinta Entre Pinos',
      imagen:
        'https://multimedia.metrocuadrado.com/16685-M4795211/16685-M4795211_1_p.jpg',
      Descripcion: 'Quinta acogedora rodeada de pinos y áreas verdes, ofrece un ambiente tranquilo y relajado para escapadas familiares o retiros corporativos.',
      Ubicacion: 'La Calera, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 10 personas.',
      Precio: '700.000 COP por noche.',
    },
    {
      nombre: 'Buena Vista',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9u3sJNw8_e8ABMSf8HJkwltuKKDM0WvR54M5h5AD38Q&s',
      Descripcion: 'Finca con vistas panorámicas a las montañas y piscina infinita, perfecta para disfrutar de atardeceres espectaculares.',
      Ubicacion: 'Salento, Quindío, Colombia.',
      Capacidad: 'Hasta 14 personas.',
      Precio: ' 1.000.000 COP por noche.',
    },
    {
      nombre: 'La Esperanza',
      imagen:
        'https://www.bienesonline.com/colombia/photos/se-vende-hermosa-casa-quinta-ubicada-en-el-mejor-sitio-de-fusagasuga-terreno-900-metros-2-covipro-FIV1847251601505212-77.jpg',
      Descripcion: 'Finca rústica con un ambiente tranquilo y vistas panorámicas, ideal para quienes buscan un refugio de la vida urbana.',
      Ubicacion: 'Fusagasugá, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 18 personas.',
      Precio: ' 900.000 COP por noche.',
    },
    {
      nombre: 'Rancho El Manantial',
      imagen:
        'https://pics.nuroa.com/finca_en_alojamiento_en_vega_vega_cundinamarca_3800_m2_10_habitaciones_1650123694283073347.jpg',
      Descripcion: 'Rancho junto a un manantial natural con amplios espacios al aire libre y áreas de entretenimiento, perfecto para reuniones familiares.',
      Ubicacion: 'La Vega, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 22 personas.',
      Precio: 'COP 1.100.000 por noche.',
    },
    {
      nombre: 'Las Acacias',
      imagen:
        'https://multimedia.metrocuadrado.com/734-M3045694/734-M3045694_701_p.jpg',
      Descripcion: 'Finca colonial rodeada de árboles de acacia y jardines exuberantes, ofrece un ambiente histórico y elegante para eventos especiales y retiros.',
      Ubicacion: 'Tenjo, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 30 personas.',
      Precio: ' 1.800.000 COP por noche.',
    },
    {
      nombre: 'Quinta La Pradera Real',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUDoaL2nzHo9EHgPo8rF6H-ypKlHNvozLOYkPSLyyDA&s',
      Descripcion: 'Quinta con extensos prados y vistas a la cordillera, perfecta para disfrutar de actividades al aire libre y momentos de relax en familia.',
      Ubicacion: 'Sopó, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 16 personas.',
      Precio: ' 1.000.000 COP por noche.',
    },
    {
      nombre: 'Quinta La Real',
      imagen:
        'https://pics.nuroa.com/espectacular_quinta_en_anapoima_cundinamarca_5040006697283950137.jpg',
      Descripcion: 'Quinta con estilo colonial y amplios espacios interiores y exteriores, ideal para  eventos especiales con un toque de elegancia.',
      Ubicacion: 'Anapoima, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 24 personas.',
      Precio: ' 1.400.000 COP por noche.',
    },
    {
      nombre: 'Rancho El Juncal',
      imagen:
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/400232326.jpg?k=215f32a085b1aa1d48681c21c18b2e93f5f786a5de1bf6ff69e022f17cfc48e0&o=&hp=1',
      Descripcion: 'Rancho de estilo campestre rodeado de juncos y naturaleza virgen, perfecto para quienes buscan una experiencia de desconexión total.',
      Ubicacion: 'Guatavita, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 12 personas.',
      Precio: ' 700.000 COP por noche.',
    },
    {
      nombre: 'Campos De Lino',
      imagen:
        'https://multimedia.metrocuadrado.com/3147-M2794825/3147-M2794825_1_p.jpg',
      Descripcion: 'Finca con extensos campos de lino y vistas a las montañas, ofrece un entorno tranquilo y sereno para escapar del bullicio de la ciudad.',
      Ubicacion: 'La Calera, Cundinamarca, Colombia.',
      Capacidad: 'Hasta 20 personas.',
      Precio: ' 1.200.000 COP por noche.',
    },
  ];
  
  pageSize = 9;
  maxPagesToShow = 20;
  paginatedFincas: any[] = [];

  constructor(
    private dialog: MatDialog,
    private renderer: Renderer2,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.updatePaginatedFincas();
    
  }

  home(){this.router.navigate(['/fincas'])}
  yourReservaciones(){this.router.navigate(['fincaDetails/id'])}
  salir(){this.router.navigate(['login'])}
  informacion(){this.router.navigate(['fincaEdit'])}
  updatePaginatedFincas() {
    this.paginatedFincas = this.chunkArray(this.fincas, this.pageSize);
  }

  chunkArray(array: any[], size: number): any[] {
    const resultArray = [];
    for (let i = 0; i < array.length; i += size) {
      resultArray.push(array.slice(i, i + size));
    }
    return resultArray;
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFincas = this.chunkArray(
      this.fincas.slice(startIndex, endIndex),
      this.pageSize
    );
  }

  alquilarFinca(finca: any) {
    const dialogRef = this.dialog.open(ReservaDialogComponent, {
      width: '400px',
      height: '400px',
      data: { fincaInfo: finca },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.actualizarReserva(result);
        console.log(
          `Reserva realizada por ${result.nombre} para ${finca.nombre}`
        );

        // Mostrar el Snackbar desde aquí
        this.mostrarSnackBar();
      } else {
        console.log('Modal de reserva cerrado');
      }
    });
  }

  mostrarSnackBar(): void {
    this.snackBar.open('¡Reserva exitosa!', 'Cerrar', {
      duration: 3000,
    });
  }
  actualizarReserva(result: any) {
    console.log('reserva actualizada');
  }
}
