import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BatchDataService } from 'src/app/services/batch-data.service';

@Component({
  selector: 'app-batch-page',
  templateUrl: './batch-page.component.html',
  styleUrls: ['./batch-page.component.sass'],
})
export class BatchPageComponent implements OnInit {
  id: string = '';

  trainerData: any[] = [];
  studentData: any[] = [];
  batchDetails: any = {};
  paths: any[] = [];

  constructor(
    private batchDataService: BatchDataService,
    private router: ActivatedRoute
  ) {
    this.id = this.router.snapshot.params['id'];
    this.batchDataService.getBatchById(this.id).subscribe((data: any) => {
      this.batchDetails = data.data;
      console.log(this.batchDetails);
    });
    this.batchDataService.getPathById(this.id).subscribe((data: any) => {
      this.paths = data.data;
      console.log(this.paths);
    });
    this.batchDataService.getTrainersById(this.id).subscribe((data: any) => {
      this.trainerData = data.data;
      console.log(this.trainerData);
    });
    this.batchDataService.getStudentsById(this.id).subscribe((data: any) => {
      this.studentData = data.data;
      console.log(this.studentData);
    });
  }

  ngOnInit(): void {}
}
