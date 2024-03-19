import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass'],
})
export class FormsComponent implements OnInit {
  isForm: boolean = false;
  handleAddReview() {
    this.isForm = true;
  }
  handleReviewClose() {
    this.isForm = false;
  }

  title = 'Angular Template Driven Form';
  loginUser(item: any) {
    console.log(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
