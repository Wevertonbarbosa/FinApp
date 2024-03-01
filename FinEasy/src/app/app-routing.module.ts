import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InformationsComponent } from './Components/informations/informations.component';
import { ChooseComponent } from './Components/choose/choose.component';
import { SimulationComponent } from './Components/simulation/simulation.component';
import { MethodComponent } from './Components/method/method.component';
import { StartComponent } from './Components/start/start.component';
import { CompleteComponent } from './Components/complete/complete.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'information',
    component: InformationsComponent
  },
  {
    path: 'choose',
    component: ChooseComponent
  },
  {
    path: 'simulation',
    component: SimulationComponent
  },
  {
    path: 'method',
    component: MethodComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'complete',
    component: CompleteComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
