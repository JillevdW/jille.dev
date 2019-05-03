import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

  @Input() topic: Topic;

  constructor(
    private modalController: ModalController
  ) {
  }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
