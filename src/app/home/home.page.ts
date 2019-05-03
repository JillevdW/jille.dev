import { Component, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Topic } from '../models/topic';

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
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.pageWidth = this.platform.width();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.pageWidth = this.platform.width();
    console.log(this.pageWidth);
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

  topicClicked(topic: Topic) {
    this.selectedTopic = topic;
  }

}
