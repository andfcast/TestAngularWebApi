import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaFacturasComponent } from './components/lista-facturas/lista-facturas.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: 'Productos', component: ListaProductosComponent },
  { path: 'Clientes', component: ListaClientesComponent },
  { path: 'Facturas', component: ListaFacturasComponent },
  { path: 'Producto/:id', component: DetalleProductoComponent },
  { path: 'Cliente/:id', component: DetalleClienteComponent },
  { path: 'Factura/:id', component: DetalleFacturaComponent },
  { path: 'CreaProducto', component: CrearProductoComponent },
  { path: 'CreaCliente', component: CrearClienteComponent },
  { path: 'CreaFactura', component: CrearFacturaComponent },
  { path: 'EditaProducto/:id', component: EditarProductoComponent },
  { path: 'EditaCliente/:id', component: EditarClienteComponent },
  { path: '',   redirectTo: '/Productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
