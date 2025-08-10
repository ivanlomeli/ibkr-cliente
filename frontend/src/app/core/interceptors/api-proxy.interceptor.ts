import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiProxyInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/ibkr-api/')) {
      const newUrl = request.url.replace('/ibkr-api', 'https://localhost:5000');
      const modifiedRequest = request.clone({ url: newUrl });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
