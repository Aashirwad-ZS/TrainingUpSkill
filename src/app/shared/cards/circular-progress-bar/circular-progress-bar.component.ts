import {
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.scss'],
})
export class CircularProgressBarComponent implements OnInit {
  @Input() progress: number = 75;
  constructor() {
  }
  ngOnInit(): void {
  }
  getStyle() {
    return{ 'background': `conic-gradient(#8DD000 ${this.progress}%, #f2f2f4 ${this.progress}%)`};
  }
 
}
