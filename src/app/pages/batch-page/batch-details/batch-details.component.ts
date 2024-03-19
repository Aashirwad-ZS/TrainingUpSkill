import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.sass'],
})
export class BatchDetailsComponent implements OnInit {
  @Input() batchData: any = [];
  constructor() {}

  ngOnInit(): void {}
}
