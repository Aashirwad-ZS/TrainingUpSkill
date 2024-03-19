import { ActivatedRoute } from '@angular/router';
import { PathDataService } from '../../../services/path-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-info',
  templateUrl: './path-info.component.html',
  styleUrls: ['./path-info.component.sass'],
})
export class PathInfoComponent implements OnInit {
  id: string = '';
  pathData: any = {};
  about: string[] = [];
  constructor(
    private pathDataService: PathDataService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params['id'];
    this.pathData = this.pathDataService
      .getPathData(this.id)
      .subscribe((data) => {
        this.pathData = data.valueOf();
        this.pathData = this.pathData.data;
        console.log(this.pathData);
      });
  }

  ngOnInit(): void {}
}
