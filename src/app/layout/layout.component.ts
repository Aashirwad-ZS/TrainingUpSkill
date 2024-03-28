import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  loggedIn: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.url.subscribe((urlSegments) => {});

    this.activatedRoute.url.subscribe((urlSegments) => {

      if (urlSegments.length >= 1) {
        if (urlSegments[0].path == 'login') this.loggedIn = true;
        else this.loggedIn = false;
      }
    });
  }
  ngOnInit(): void {}
}
