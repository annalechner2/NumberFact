import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetNumberApiService {
  constructor(private http: HttpClient) {}

  apiCall(num: number) {
    var url = "http://numbersapi.com/"+num+"/math";
    console.log(url);
    return this.http.get(url, {responseType: 'text'});
  }
}
