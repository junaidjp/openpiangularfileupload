import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor is working!');
    // Clone the request and add your static headers
    const modifiedRequest = request.clone({
      setHeaders: {
        'users': 'cmsadmin', // Replace with the actual user value
        'roles': 'admin,user', // Replace with the actual roles value
      },
    });

    console.log('Modified Request Headers:', modifiedRequest.headers);
    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
