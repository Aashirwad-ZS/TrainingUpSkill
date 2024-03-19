import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userDataArray: any = [
    {
      id: 329,
      name: 'Aashirwad',
      email: 'aashirwad.yadav@zopsmart.com',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocKKorMy1JHY0BH25g-GZyxmYu8mXW5AS9o-uS7UEk9K=s96-c',
    },
  ];
  constructor(private http: HttpClient) {
    console.log('user data service');
  }

  getData() {
    return this.userDataArray[0];
  }
}
