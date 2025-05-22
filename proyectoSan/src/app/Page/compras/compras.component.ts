import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-compras',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
//Declaracion del formulario reactivo para la compra
formulariocompra!: FormGroup;

//Variable para almacenar el total de la compra (subtotal + envio)
total!:number;

}
