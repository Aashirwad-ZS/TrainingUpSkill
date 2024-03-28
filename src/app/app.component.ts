import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor() {
    localStorage.setItem('refreshCount', '0');
  }
  runTest(i: number) {
  }

  title = 'Skill Up';
  loggedIn: boolean = true;
  handleEvent(event: boolean) {
    this.loggedIn = event;
  }
}
