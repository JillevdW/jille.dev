import { Component, HostListener } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Topic } from '../models/topic';
import { DetailModalComponent } from '../components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageWidth = 0;
  maxWidth = 1200;

  selectedTopic: Topic = null;

  constructor(
    private platform: Platform,
    private modalController: ModalController
  ) {
    this.platform.ready().then(() => {
      this.pageWidth = this.platform.width();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.pageWidth = this.platform.width();
  }

  get containerClass(): string {
    if (this.pageWidth < this.maxWidth) {
      return 'card-container';
    }
    return 'contained';
  }

  get largePage(): boolean {
    return this.pageWidth > this.maxWidth;
  }

  get topicListClass(): string {
    if (this.pageWidth < this.maxWidth) {
      return 'topic-list-full';
    }
    return 'topic-list';
  }

  topicClicked(topic: Topic) {
    this.selectedTopic = topic;
    if (!this.largePage) {
      this.showDetailModal(topic);
    }
  }

  async showDetailModal(topic: Topic) {
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      componentProps: { topic }
    });

    modal.present();
  }

}
