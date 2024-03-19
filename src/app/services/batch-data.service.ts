import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BatchDataService {
  constructor(private https: HttpClient) {}
  url: string = 'https://api.training.zopsmart.com/student/batches/';

  getAllBatches() {
    return this.https.get(this.url + '/all');
  }

  getBatchById(id: string) {
    return this.https.get(this.url + id);
  }

  getPathById(id: string) {
    return this.https.get(this.url + id + '/paths');
  }
  getTrainersById(id: string) {
    return this.https.get(this.url + id + '/trainers');
  }
  getStudentsById(id: string) {
    return this.https.get(this.url + id + '/students');
  }
  private cache:any;
  private allBatchesSubject = new BehaviorSubject<any>({});
  allBatches$ = this.allBatchesSubject.asObservable();
  getBatchesDetails() {
    if (this.cache){
      this.allBatchesSubject.next(this.cache);
    }else {
      this.https.get(
        'https://api.training.zopsmart.com/student/batches/all',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Referer: 'https://training.zopsmart.com/',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
          },
        }
      ).subscribe((data)=>{
        this.cache = data;
        this.allBatchesSubject.next(this.cache);
      });
    }
    
  }
}
