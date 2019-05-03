import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {}

}
