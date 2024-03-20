import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InformationsComponent } from '../Components/informations/informations.component';
import { ChooseComponent } from '../Components/choose/choose.component';
import { MenuComponent } from '../Components/menu/menu.component';
import { MethodComponent } from '../Components/method/method.component';
import { StartComponent } from '../Components/start/start.component';
import { CompleteComponent } from '../Components/complete/complete.component';


import { SimulationComponent } from '../Components/simulation/simulation.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, NgxMaskDirective, NgxMaskPipe ],
  declarations: [
    HomePage,
    InformationsComponent,
    ChooseComponent,
    MenuComponent,
    MethodComponent,
    StartComponent,
    CompleteComponent,
    SimulationComponent
  ],
 
})
export class HomePageModule {}
