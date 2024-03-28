import { Component, Input, OnInit } from '@angular/core';
import { Batch } from 'src/app/models/Batch';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.sass'],
})
export class BatchDetailsComponent implements OnInit {
  @Input() batchData: Batch = {
    createdAt: '',
    createdBy: {
      email: '',
      id: 0,
      imageUrl: '',
      name: '',
      isActive: false,
    },
    endDate: '',
    startDate: '',
    id: 0,
    isAccessible: false,
    name: '',
    noOfPaths: 0,
    noOfStudents: 0,
    noOfTrainers: 0,
    streamName: '',
    stream: {
      streamId: 0,
      streamName: '',
    },
    progress: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
