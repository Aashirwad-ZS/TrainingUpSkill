import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass'],
})
export class PageNotFoundComponent implements OnInit {
  chapterFlag: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.chapterFlag = this.router.url == '/invitations' ? true : false;
  }
}
