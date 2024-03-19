import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('login', 'false');
    console.log('destroyed');
  }

  ngOnInit(): void {
    localStorage.setItem('login', 'true');
    console.log('init');
  }
  @Output() eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  handelButtonClick() {
    this.eventEmitter.emit(true);
  }
}
