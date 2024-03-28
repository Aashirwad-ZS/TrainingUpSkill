import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/models/Chapter';
import { loadChapterData } from 'src/app/state/action/course.actions';
import { Store } from '@ngrx/store';
import { selectChapterData } from 'src/app/state/selector/course.selector';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass'],
})
export class ChapterComponent implements OnInit {
  id: string = '';
  allChapters: Chapter[] = [];
  constructor(private store: Store, private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
    // this.store.dispatch(loadChapterData({ courseId: this.id }));
    this.store.select(selectChapterData).subscribe((chapter) => {
      this.allChapters = chapter;
      // console.log(this.allChapters);
    });
  }
  ngOnInit(): void {}
}
