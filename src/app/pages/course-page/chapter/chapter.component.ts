import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../../../services/course-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass'],
})
export class ChapterComponent implements OnInit {
  id: string = '';
  allChapters: any = [];
  constructor(
    private allChapterServices: CourseDataService,
    private router: ActivatedRoute
  ) {
    this.id = this.router.snapshot.params['id'];
    this.allChapterServices.getChapterData(this.id).subscribe((data) => {
      this.allChapters = data.valueOf();
      this.allChapters = this.allChapters.data;
      console.log(this.allChapters);
    });
  }
  ngOnInit(): void {}
}
