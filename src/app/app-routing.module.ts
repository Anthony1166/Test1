import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './component/mascota/mascota.component';
import { CrisostomoCrearComponent } from './component/mascota/crisostomo-crear/crisostomo-crear.component';
import { CrisostomoListarComponent } from './component/mascota/crisostomo-listar/crisostomo-listar.component';

const routes: Routes = [
  {
    path: 'mascota',
    component: MascotaComponent,
    children: [
      {
        path: 'crear',
        component: CrisostomoCrearComponent,
      },
      {
        path: 'listado',
        component: CrisostomoListarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
