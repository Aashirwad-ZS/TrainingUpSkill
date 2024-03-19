import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZopsmartApiInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    const modifiedReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + token),
    });
    console.log('intercepted');

    return next.handle(modifiedReq);
  }

  constructor() {}
}
