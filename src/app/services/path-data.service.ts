import { Injectable } from '@angular/core';
import { Paths } from '../models/Paths';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDgyNTQwOCwiaWF0IjoxNzEwODI1MTA4LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMzJ9.NlAnvnZjYx_7JFUMsc_DWmYdgSTmA2PAn9mHhfFfT01KJ_UL6WcARLBj73qPrGD_xLeD5PV19KoGaLrz7902K8i04_4PzSygfJ2_-a_uyS81fN6Q0xB1h3X3P5kIbPA9zF4oMx79UDhZUILTYm1Djz1ToIAJqOfmvNUCjecjcmWEvLo9gorPOeJXQmM0-MBOwj1ciypE8xP2Dbzo03obFzgOxR5J9_Wf4r6tM0TM3KzGKO9-9pgmxLsRbIP9FSZfHf2iY1DtvvuIru7fI3eklLaWfzfWwp_vZCf3YtdWwiasOYP5clc2kIn8IqmvMBhAQj8V-X9XJltD4mKZGl-y3g',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMDg3NjA5NSwiaWF0IjoxNzEwNzg5Njk1LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJhYXNoaXJ3YWQueWFkYXZAem9wc21hcnQuY29tIn0.TcheCi_fgNHbI3bYU5EHA-8QaBF-3GBL5QCmkIz68RhVlMGDhPptiIayiMNMStgq82uFWNZLILUwz6A58B4ZZ7ELF22EDuk7bFjZ_YCoFD7j_zGAPN9JAx9tX6UmuGg0NZdhTgf-Cb5e2KLjIFd5Z4UrdNt-ExMlAKPgooG0NL20xKM8cI6uXWXsgjZmQ5W15jTj-uGGh6-tzW91rEJzEO0CuEkV-EbKSN17Q7pKp-9mCPcl8MSxQHCjLp3-ag-gOKWba-Y34z8gh4OMNTg0PbembhK18kd2jjXMSfRP2JiOkKqY58A6jGxuK7NISgkDIFDoxjPI6nAlzw_bSTcOJw',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  url: string = 'https://api.training.zopsmart.com/students/paths';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    setInterval(() => {
      this.getRefreshToken().subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log('token refreshed');
      });
    }, 60000);
  }
  private cache: any = null;
  private allPathDataSubject = new BehaviorSubject<any>({});
  allPathsData$ = this.allPathDataSubject.asObservable();
  getPaths() {
    if (this.cache != null) {
      this.allPathDataSubject.next(this.cache);
    } else {
      this.http.get(this.url + '?pageSize=10&pageNo=1').subscribe((data) => {
        this.cache = data;
        this.allPathDataSubject.next(this.cache);
      });
    }
  }

  getPathData(id: string) {
    return this.http.get(this.url + '/' + id + '?projection=course');
  }
  getAllPaths() {
    return this.http.get((this.url = '?pageSize=12&pageNo=1'));
  }
  getEnrolledPaths() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/enrolled-paths'
    );
  }
  getRefreshToken() {
    return this.http.post(
      'https://api.training.zopsmart.com/login/refresh',
      {
        organizationId: 2,
        currentRole: 'student',
      },
      {
        headers: this.refreshHeader,
      }
    );
  }
}
