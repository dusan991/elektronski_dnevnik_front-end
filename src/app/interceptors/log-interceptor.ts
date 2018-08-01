import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    constructor(
      private auth: AuthService
    ) {}

    intercept(req: HttpRequest<any>,
      next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.auth.ulogovan) {
        const cloned = req.clone({
            headers: this.auth.getHeaders()
      });

      return next.handle(cloned);
      } else {
      return next.handle(req);
      }
  }
}
