import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopicListComponent } from './topic-list/topic-list.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MarkdownModule.forChild()
  ],
  declarations: [
    TopicListComponent,
    DetailCardComponent,
    DetailModalComponent
  ],
  exports: [
    TopicListComponent,
    DetailCardComponent,
    DetailModalComponent
  ],
  entryComponents: [
    DetailModalComponent
  ]
})
export class ComponentsModule {}
