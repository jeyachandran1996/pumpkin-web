import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient) { }

  getImages(data:any): Observable<any>{
    return this.httpClient.put<any>(
      environment.api+`/images/get`, 
      data,
      {observe: "body"}
    )
  }
}
