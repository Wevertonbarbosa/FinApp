import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InformationsComponent } from '../Components/informations/informations.component';
import { ChooseComponent } from '../Components/choose/choose.component';
import { SimulationComponent } from '../Components/simulation/simulation.component';
import { MenuComponent } from '../Components/menu/menu.component';
import { MethodComponent } from '../Components/method/method.component';
import { StartComponent } from '../Components/start/start.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    InformationsComponent,
    ChooseComponent,
    SimulationComponent,
    MenuComponent,
    MethodComponent,
    StartComponent
  ],
})
export class HomePageModule {}
