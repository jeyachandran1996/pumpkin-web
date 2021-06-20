import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message = new Subject<any>();

  constructor(private route: Router) { }

  sendMessage(data: any) {
    this.message.next(data);
  }
  getMessgae(): Observable<any> {
    return this.message.asObservable();
  }

  redirectToLogin(){
    this.route.navigate(['login'])
  }
}
