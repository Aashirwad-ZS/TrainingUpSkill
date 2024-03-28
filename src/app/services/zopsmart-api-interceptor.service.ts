import { Error } from './../models/Error';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retryWhen, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { MiscellaneousService } from './miscellaneous.service';

@Injectable({
  providedIn: 'root',
})
export class ZopsmartApiInterceptorService implements HttpInterceptor {
  refreshCount: number = 0;
  error: Error = {
    code: 0,
    message: '',
  };
  constructor(private mis: MiscellaneousService, private store$: Store) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    const modifiedReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + token),
    });
    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.refreshCount = parseInt(
            localStorage.getItem('refreshCount') || '0'
          );
          if (this.refreshCount <= 2) {
            this.mis.getRefreshToken().subscribe((res: any) => {
              this.refreshCount = this.refreshCount + 1;
              localStorage.setItem(
                'refreshCount',
                this.refreshCount.toString()
              );
              localStorage.setItem('token', res.data.accessToken);
            });
            setTimeout(() => {
              //window.location.reload();
            }, 5000);
          }

          this.error.message = 'Session Expired. Please login again';
          this.error.code = 401;
        } else if (error.status === 404) {
          this.error.message = 'Not Found';
          this.error.code = 404;
        } else if (error.status === 500) {
          this.error.message = 'Internal Server Error';
          this.error.code = 500;
        } else if (error.status === 400) {
          this.error.message = 'Bad Request';
          this.error.code = 400;
        } else if (error.status === 403) {
          this.error.message = 'Forbidden';
          this.error.code = 403;
        } else if (error.status === 405) {
          this.error.message = 'Method Not Allowed';
          this.error.code = 405;
        } else if (error.status === 409) {
          this.error.message = 'Conflict';
          this.error.code = 409;
        } else if (error.status === 408) {
          this.error.message = 'Request Timeout';
          this.error.code = 408;
        } else if (error.status === 503) {
          this.error.message = 'Service Unavailable';
          this.error.code = 503;
        } else if (error.status === 504) {
          this.error.message = 'Gateway Timeout';
          this.error.code = 504;
        } else if (error.status === 0) {
          this.error.message = 'Network Error';
          this.error.code = 0;
        } else {
          localStorage.setItem('refreshCount', (0).toString());
        }
        return throwError(
          () => new Error(this.error.code + '`' + this.error.message)
        );
      })
    );
  }
}
