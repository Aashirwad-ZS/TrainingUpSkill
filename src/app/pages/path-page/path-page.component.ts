import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Error } from 'src/app/models/Error';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { loadPathById } from 'src/app/state/action/path.actions';
import {
  selectPathByIdError,
  selectPathByIdLoading,
} from 'src/app/state/selector/path.selector';

@Component({
  selector: 'app-path-page',
  templateUrl: './path-page.component.html',
  styleUrls: ['./path-page.component.sass'],
})
export class PathPageComponent implements OnInit {
  id: string = '';
  loading: boolean = true;
  error: boolean = false;
  errorCard: Error = {
    message: '',
    code: 0,
  };
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private mis: MiscellaneousService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.store.dispatch(loadPathById({ id: this.id }));
    this.store.select(selectPathByIdError).subscribe((res) => {
      if (res != null) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      } else {
        this.error = false;
      }
    });
    this.store.select(selectPathByIdLoading).subscribe((res) => {
      if (res == false) {
        setTimeout(() => {
          this.loading = res;
        }, 500);
      } else {
        this.loading = res;
      }
    });
  }
}
