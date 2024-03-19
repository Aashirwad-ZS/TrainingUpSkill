import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.sass'],
})
export class ComponentHeaderComponent implements OnInit {
  @Input() heading: string = '';

  constructor() {}

  ngOnInit(): void {}
}
