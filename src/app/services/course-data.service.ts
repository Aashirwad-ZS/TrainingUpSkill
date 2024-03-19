import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.training.zopsmart.com/students';

  getAllCourses() {
    return this.http.get(this.url + '/courses?pageSize=12&pageNo=1');
  }
  private cache:any;
  private allCoursesSubject = new BehaviorSubject<any>({});
  allCourses$ = this.allCoursesSubject.asObservable();
  getCoursesData() {
    if (this.cache){
      this.allCoursesSubject.next(this.cache);
    }else{
      this.http.get(this.url + '/courses?pageSize=12&pageNo=1').subscribe((data)=>{
        this.cache = data;
        this.allCoursesSubject.next(this.cache);
      });
    }
  }

  getNoOfEnrolledCourses() {
    return this.http.get(this.url + '/no-of-enrolled-courses');
  }
  getCourseAboutInfo(id: string) {
    return this.http.get(this.url + '/courses/' + id);
  }
  getChapterData(id: string) {
    return this.http.get(this.url + '/courses/' + id + '/chapters');
  }

  getEnrolledCourses() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/enrolled-courses'
    );
  }
}
