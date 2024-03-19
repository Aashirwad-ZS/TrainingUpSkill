import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-card',
  templateUrl: './batch-card.component.html',
  styleUrls: ['./batch-card.component.sass'],
})
export class BatchCardComponent implements OnInit {
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;

  @Input() batchData: any = {};

  constructor() {}

  ngOnInit(): void {}
}
