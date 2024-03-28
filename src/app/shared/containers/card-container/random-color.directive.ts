import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
  standalone: true,
})
export class RandomColorDirective implements OnInit {
  @Input('appRandomColor') index: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundImage = this.getColor(this.index);
  }

  getColor(index: number) {
    const colors = [
      'linear-gradient(270deg, rgb(0, 162, 238), rgb(0, 120, 200))',
      'linear-gradient(30deg, rgb(255, 92, 131), rgb(227, 146, 202))',
      'linear-gradient(30deg, rgb(128, 0, 128), rgb(221, 160, 221))',
      'linear-gradient(30deg, rgb(75, 0, 130), rgb(173, 216, 230))',
      'linear-gradient(30deg, rgb(255, 105, 180), rgb(255, 140, 0))',
    ];
    return colors[index % 5];
  }
}
