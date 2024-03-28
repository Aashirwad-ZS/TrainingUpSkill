import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shimmer-loading',
  templateUrl: './shimmer-loading.component.html',
  styleUrls: ['./shimmer-loading.component.scss']
})
export class ShimmerLoadingComponent implements OnInit {

  @HostBinding('class') class = 'shimmer-loading';

  @Input() width = '80%';
  @Input() height = '12px';
  @Input() shape: 'circle' | 'square' | 'rect' = 'rect';
  @Input() borderRadius = '5px';
  @Input() direction: 'ltr' | 'rtl' = 'rtl';
  constructor() {}
  ngOnInit() {}
  get shimmerHeight(): string {
    switch (this.shape) {
      case 'circle':
        return this.width;
      case 'square':
        return this.width;
      case 'rect':
        return this.height;
    }
  }

  get shimmerBorderRadius(): string {
    return this.shape === 'circle' ? '50%' : this.borderRadius;
  }

}
