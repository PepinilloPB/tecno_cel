import { Component, HostBinding, OnInit } from '@angular/core';
import { Celular } from 'src/app/models/Celultar';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor() { }

  public cells: Celular[] = [
    {
      id: 1,
      model: "iPhone 13 Pro Max",
      description: "Es un teléfono muy completo con excelente hardware, cámaras y experiencia de software.",
      price: 999,
      image: "https://icdn.dtcn.com/image/digitaltrends_es/iphone-13-pro-max-6-768x768.jpg"
    },
    {
      id: 2,
      model: "iPhone 13",
      description: "Desde el momento en que comienzas a usarlo pruebas su cámara doble, la potencia de su procesador A15 Bionic y, sobre todo, la duración de su batería, que técnicamente es ligeramente superior a la del iPhone 12.",
      price: 799,
      image: "https://icdn.dtcn.com/image/digitaltrends_es/iphone13-01-768x768.jpg"
    },
    {
      id: 3,
      model: "Samsung Galaxy S21 Ultra",
      description: "Es lo mejor de lo mejor, con una tremenda y hermosa pantalla, buen software, muchas funciones y una cámara con multilente, además de una gran duración de la batería.",
      price: 1200,
      image: "https://icdn.dtcn.com/image/digitaltrends_es/9galaxy-s21-ultra-s-pen-s-view-case-768x576.jpg"
    },
    {
      id: 4,
      model: "Google Pixel 5",
      description: "La línea Pixel sigue siendo la única opción Android capaz de competir completamente con el iPhone de Apple en varias áreas, incluyendo seguridad, actualizaciones puntuales y el diseño de software. ",
      price: 600,
      image: "https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2020/10/1/eebf39f8620b34dcb76ef2da03a3450df9c59b5d.jpeg"
    },
    {
      id: 5,
      model: "Motorola Moto G Power",
      description: "Motorola te entrega todo lo básico dentro de un buen tamaño junto con algunas características agradables.",
      price: 170,
      image: "https://icdn.dtcn.com/image/digitaltrends_es/motorola-moto-g-power-2021-4-768x768.jpg"
    },
    {
      id: 6,
      model: "Samsung Galaxy S21",
      description: "La experiencia central del teléfono insignia de Samsung está disponible a un precio conveniente.",
      price: 800,
      image: "https://icdn.dtcn.com/image/digitaltrends_es/1galaxy-s21-black-front-back-768x768.jpg"
    },
    {
      id: 7,
      model: "Google Pixel 4a",
      description: "Porque este diseño de Google es el mejor en cuanto a teléfonos pequeños, sencillos y con un precio atractivo.",
      price: 300,
      image: "https://icdn.dtcn.com/image/digitaltrends_es/google-pixel-4a-front-768x512.jpg"
    },
    {
      id: 8,
      model: "Galaxy Z Fold 3",
      description: "Los plegables son el futuro de los teléfonos, y el Z Fold 3 es el mejor de los que ya existen.",
      price: 1600,
      image: "https://icdn.dtcn.com/image/digitaltrends_es/samsung-galaxy-z-fold-3-2-768x768.jpg"
    }
  ];

  ngOnInit(): void {
  }

}
