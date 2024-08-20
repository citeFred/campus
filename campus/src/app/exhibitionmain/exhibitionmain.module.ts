import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExhibitionmainPageRoutingModule } from './exhibitionmain-routing.module';

import { ExhibitionmainPage } from './exhibitionmain.page';
import {TopBarComponent} from "../top-bar/top-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExhibitionmainPageRoutingModule,
    TopBarComponent
  ],
  declarations: [ExhibitionmainPage]
})
export class ExhibitionmainPageModule {}
