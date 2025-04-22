export interface Producto {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    img: string;
    disponibilidad?: boolean;
    cantidad: number;
}