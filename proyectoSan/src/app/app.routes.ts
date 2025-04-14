import { Routes } from '@angular/router';
import { InicioComponent } from './Page/inicio/inicio.component';
import { ProductosComponent } from './Page/productos/productos.component';
import { OfertasComponent } from './Page/ofertas/ofertas.component';
import { ContactosComponent } from './Page/contactos/contactos.component';

export const routes: Routes = [
    {path: "Inicio", component: InicioComponent},
    {path: "Productos", component: ProductosComponent},
    {path: "Ofertas", component: OfertasComponent},
    {path: "Contactos", component: ContactosComponent},
    {path: "", component: InicioComponent}
];
