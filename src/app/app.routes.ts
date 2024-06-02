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
    path: 'perfil',
    loadComponent: () => import('../app/views/perfil/perfil.component').then((m) => m.PerfilComponent),
  },




  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
