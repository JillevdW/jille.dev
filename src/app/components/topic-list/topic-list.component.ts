import { Component, OnInit, HostListener } from '@angular/core';
import { Topic } from 'src/app/models/topic';

// tslint:disable:max-line-length

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {

  items: Array<Topic> = [];

  constructor() {
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

  ngOnInit() {}

}
