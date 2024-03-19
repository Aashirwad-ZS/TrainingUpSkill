import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-info-card',
  templateUrl: './name-info-card.component.html',
  styleUrls: ['./name-info-card.component.sass'],
})
export class NameInfoCardComponent implements OnInit {
  @Input() singleCardInfo: any = {};
  @Input() heading: string = '';
  constructor() {}

  ngOnInit(): void {}
}
