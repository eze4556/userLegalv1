import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

   {
    path: 'login',
    loadComponent: () => import('../app/views/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'certificacion',
    loadComponent: () => import('./views/cert-ingresos/cert-ingresos.component').then((m) => m.CertIngresosComponent),
  },
  {
    path: 'facturacion',
    loadComponent: () => import('./views/facturacion/facturacion.component').then((m) => m.FacturacionComponent),
  },
  {
    path: 'planpago',
    loadComponent: () => import('./views/plan-pago/plan-pago.component').then((m) => m.PlanPagoComponent),
  },
  {
    path: 'recibosueldo',
    loadComponent: () => import('./views/recibo-sueldo/recibo-sueldo.component').then((m) => m.ReciboSueldoComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
