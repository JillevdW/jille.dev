import { Component, OnInit, HostListener } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { Platform } from '@ionic/angular';

// tslint:disable:max-line-length

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {

  items: Array<Topic> = [];

  pageWidth = 0;

  // maxWidth = 1200;
  maxWidth = 1000;

  constructor(
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.pageWidth = this.platform.width();
    });

    this.items.push({
      title: 'About me',
      type: 'Topic',
      shortDescription: 'Some information about me, like why I do the things that I do!',
      image: 'assets/images/me.jpg'
    }, {
      title: 'HiLo',
      type: 'Project',
      shortDescription: 'I help the founders of this social media app with their technical decisions, and I maintain their iOS application.',
      image: 'https://thehiloapp.com/img/humans1.png'
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.pageWidth = this.platform.width();
    console.log(this.pageWidth);
  }

  ngOnInit() {}

  get containerClass(): string {
    if (this.pageWidth < this.maxWidth) {
      return 'card-container';
    }
    return 'contained';
  }

  get largePage(): boolean {
    return this.pageWidth > this.maxWidth;
  }

}
