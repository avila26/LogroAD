import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'saludo',
    pathMatch: 'full'
  },
  {
    path: 'saludo',
    loadChildren: () => import('./vistas/saludo/saludo.module').then( m => m.SaludoPageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./vistas/persona/persona.module').then( m => m.PersonaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
