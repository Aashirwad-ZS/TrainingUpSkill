import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.sass'],
})
export class ProfileHeaderComponent implements OnInit {
  userProfile: any;
  progress: number = 75;

  constructor() {}

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
}
