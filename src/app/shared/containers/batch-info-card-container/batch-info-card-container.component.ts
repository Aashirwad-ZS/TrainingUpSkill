import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-info-card-container',
  templateUrl: './batch-info-card-container.component.html',
  styleUrls: ['./batch-info-card-container.component.sass'],
})
export class BatchInfoCardContainerComponent implements OnInit {
  @Input() cardsData: any = [];
  @Input() heading: string = '';
  constructor() {}

  ngOnInit(): void {}
}
