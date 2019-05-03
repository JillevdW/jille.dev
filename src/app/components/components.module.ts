import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopicListComponent } from './topic-list/topic-list.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TopicListComponent
  ],
  exports: [
    TopicListComponent
  ]
})
export class ComponentsModule {}
