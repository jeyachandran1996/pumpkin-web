import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(data:any): Observable<any>{
    return this.httpClient.post<any>(
      environment.api+`/login`, 
      data,
      {observe: "body"}
    )
  }
}
