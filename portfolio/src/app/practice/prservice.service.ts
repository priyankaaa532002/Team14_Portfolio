import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrserviceService {
  private apiUrl = 'http://localhost:5000/holdings/'; 

  constructor(private http: HttpClient) { }

  getHoldings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
