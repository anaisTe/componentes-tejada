import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  PLACES = [
    {
      title: 'Información General de Destinos',
      img: 'img.jpeg',
      info: 'Descripciones detalladas de destinos turísticos populares.'
    },
    {
      title: 'Atracciones Turísticas',
      img: 'img2.jpeg',
      info: 'Lista de lugares de interés, como monumentos, museos, parques naturales, playas, etc.'
    },
    {
      title: 'Eventos y Festivales',
      img: 'img3.jpeg',
      info: 'Calendario de eventos locales, como festivales culturales, conciertos, ferias, etc.'
    },
    {
      title: 'Gastronomía y Restaurantes',
      img: 'img4.jpeg',
      info: 'Recomendaciones de platos locales y especialidades gastronómicas.'
    },
    {
      title: 'Transporte y Alojamiento',
      img: 'img5.jpeg',
      info: 'Información sobre opciones de transporte y alojamiento disponibles.'
    },
    {
      title: 'Mapas Interactivos y Navegación',
      img: 'img6.jpeg',
      info: 'Mapas interactivos que muestren la ubicación de las atracciones, restaurantes, hoteles, etc.'
    }
  ];
  
}
