import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from "rxjs";
import { MessageService } from "../services/messages/message.service";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService){}
  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err)=>{
        console.log(err)
        if(err.status==401 || err.status==403){
          this.messageService.redirectToLogin()
        }
        return throwError(err.message)
      })
    );
  }
}
