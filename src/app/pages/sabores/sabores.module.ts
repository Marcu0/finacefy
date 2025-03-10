import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaboresPageRoutingModule } from './sabores-routing.module';

import { SaboresPage } from './sabores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaboresPageRoutingModule
  ],
  declarations: [SaboresPage]
})
export class SaboresPageModule {}
