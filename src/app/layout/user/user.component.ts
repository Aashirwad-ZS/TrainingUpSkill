import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate() {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }
}
