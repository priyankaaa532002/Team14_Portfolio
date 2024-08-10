import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoldingServiceService {

  apiUrl = 'http://localhost:5000/holdings/';
  url = 'http://localhost:5000/transactions/ticker/';
  constructor(private http: HttpClient) { }

  getHoldings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTransactionsByTicker(ticker: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}${ticker}`);
  }
}
