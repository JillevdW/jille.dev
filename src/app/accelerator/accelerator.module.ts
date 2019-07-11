import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AcceleratorPage } from './accelerator.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AcceleratorPage
      }
    ]),
    ComponentsModule
  ],
  declarations: [AcceleratorPage]
})
export class AcceleratorPageModule {}
