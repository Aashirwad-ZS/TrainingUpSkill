import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-batch-info-card-container',
  templateUrl: './batch-info-card-container.component.html',
  styleUrls: ['./batch-info-card-container.component.sass'],
})
export class BatchInfoCardContainerComponent implements OnInit {
  @Input() cardsData: User[] = [];
  @Input() heading: string = '';
  constructor() {}

  ngOnInit(): void {}
}
