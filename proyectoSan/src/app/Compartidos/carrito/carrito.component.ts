import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../Modelos/producto.model'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{

 // Arreglo que guarda los productos en el carrito, con su cantidad
  productosEnCarrito: { producto: Producto; cantidad: number }[] = [];

  // Inyectamos el servicio del carrito en el constructor
  constructor(private carritoService: CarritoService) {}

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Nos suscribimos al observable del carrito para mantener actualizada la lista de productos
    this.carritoService.carrito$.subscribe((productos) => {
      this.productosEnCarrito = productos;
    });
  }

  // Método para aumentar en 1 la cantidad de un producto en el carrito
  agregarCantidad(index: number) {
    this.productosEnCarrito[index].cantidad++;
  }

  // Método para disminuir en 1 la cantidad de un producto en el carrito
  quitarCantidad(index: number) {
    // Solo permite disminuir si la cantidad es mayor a 1 (no permite cantidades cero o negativas)
    if (this.productosEnCarrito[index].cantidad > 1) {
      this.productosEnCarrito[index].cantidad--;
    }
  }

  // Método para eliminar completamente un producto del carrito
  eliminarProducto(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId);
  }

  // Método para vaciar todo el carrito
  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  // Método que simula la realización de una compra
  realizarCompra() {
    alert('Compra realizada exitosamente!'); // Muestra un mensaje de éxito
    this.vaciarCarrito(); // Vacía el carrito después de comprar
  }
}
