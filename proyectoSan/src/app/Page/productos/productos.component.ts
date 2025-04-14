import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    {
      nombre: "manzana",
      precio: "300",
      img: "https://th.bing.com/th/id/R.c6ef1c7c177ba0e205add120ea606bf5?rik=v3wGpu4bFxqMtA&riu=http%3a%2f%2fwww.ibereco.com%2fimagen%2fcompleta%2f0%2f0%2fmanzana-roja-unidad_1.jpg&ehk=YYUtD01LCi9sJPys3KZ4sp83JmIlX0wQrzg79GZBO3w%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      nombre: "banana",
      precio: "500",
      img: "https://th.bing.com/th/id/OIP.4SS14J9OyyhuvbSw-tvEYwHaFj?rs=1&pid=ImgDetMain"
    },
    {
      nombre: "pera",
      precio: "800",
      img: "https://th.bing.com/th/id/OIP.REw4HkHTBpqMwF7qKzoMawHaKL?rs=1&pid=ImgDetMain"
    }
  ];
}
