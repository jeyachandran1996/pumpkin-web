import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getReport(): Observable<any>{
    return this.httpClient.get<any>(
      environment.api+`/user/report`, 
      {observe: "body"}
    )
  }
}
