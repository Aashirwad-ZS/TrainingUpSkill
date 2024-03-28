import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Batch } from 'src/app/models/Batch';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';

@Component({
  selector: 'app-batch-card',
  templateUrl: './batch-card.component.html',
  styleUrls: ['./batch-card.component.sass'],
})
export class BatchCardComponent implements OnInit {
  isProfile: boolean = false;

  @Input() index: number = 0;
  @Input() progress: number = 0;

  @Input() batchData: any = {
    id: 0,
    name: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
      isActive: false,
    },
    createdAt: '',
    endDate: '',
    streamName: '',
    noOfTrainers: 0,
    noOfStudents: 0,
    noOfPaths: 0,
    isAccessible: false,
    startDate: '',
    stream: {
      streamId: 0,
      streamName: '',
    },
    progress: 10,
  };

  constructor(private mis: MiscellaneousService, private router: Router) {}

  ngOnInit(): void {
    this.isProfile = this.router.url.includes('user') ? true : false;
  }
}
