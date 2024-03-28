import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-shimmer',
  templateUrl: './card-shimmer.component.html',
  styleUrls: ['./card-shimmer.component.sass']
})
export class CardShimmerComponent implements OnInit {

  constructor() { }
  @Input() height:number=100;
  ngOnInit() {
  }

}
