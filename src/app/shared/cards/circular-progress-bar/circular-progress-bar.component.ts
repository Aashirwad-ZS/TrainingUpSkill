import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.sass'],
})
export class CircularProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public value = 70;
  public animation = true;
  public colors: any[] = [
    {
      from: 0,
      to: 25,
      color: '#F42E17',
    },
    {
      from: 25,
      to: 50,
      color: '#F8DE7E',
    },
    {
      from: 50,
      to: 75,
      color: '#F2E349',
    },
    {
      from: 75,
      to: 100,
      color: '#4A9E24',
    },
  ];
}
