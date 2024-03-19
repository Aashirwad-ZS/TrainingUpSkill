import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-path-card',
  templateUrl: './path-card.component.html',
  styleUrls: ['./path-card.component.sass'],
})
export class PathCardComponent implements OnInit {
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;

  @Input() singlePath: any = {};
  constructor() {}

  ngOnInit(): void {}
}
