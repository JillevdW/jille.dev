import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { TopicRepository } from 'src/app/repositories/topic.repository';

// tslint:disable:max-line-length

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {

  @Output() clicked = new EventEmitter<Topic>();

  items: Array<Topic> = [];

  constructor(
    private topicRepo: TopicRepository
  ) {
    this.items = this.topicRepo.topics();
  }

  ngOnInit() {}

  clickedItem(topic: Topic) {
    this.clicked.emit(topic);
  }

}
