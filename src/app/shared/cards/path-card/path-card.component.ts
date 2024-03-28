import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Path } from 'src/app/models/Path';
@Component({
  selector: 'app-path-card',
  templateUrl: './path-card.component.html',
  styleUrls: ['./path-card.component.sass'],
})
export class PathCardComponent implements OnInit {
  @Input() onGoingFlag: boolean = false;
  RouterLinks = RouterLinks;
  isProfile: boolean = false;
  @Input() singlePath: Path = {
    id: 0,
    pathId: 0,
    name: '',
    pathName: '',
    imageUrl: '',
    isAccessible: false,
    noOfCourses: 0,
    progress: 0,
    completedAt: null,
  };
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isProfile = this.router.url.includes('user') ? true : false;
  }
}
