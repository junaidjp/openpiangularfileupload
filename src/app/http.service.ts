import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private http: HttpClient) {}
  private serverUrl = 'http://localhost:3000';
  

  getRequestHeaders() {
    const url = `${this.serverUrl}/api/headers`;
   return this.http.get(url);
  }
}
