import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface StockData {
  Close: number;
  Date: string;
  Dividends: number;
  High: number;
  Low: number;
  Open: number;
  'Stock Splits': number;
  Volume: number;
}

@Injectable({
  providedIn: 'root'
})

export class NewWatchlistServiceService {
  private apiUrl = 'http://localhost:5000/actions/historical_data';

  constructor(private http: HttpClient) { }

  getStockData(ticker: string, startDate: string, endDate: string): Observable<StockData[]> {
    const url = `${this.apiUrl}?ticker=${ticker}&start_date=${startDate}&end_date=${endDate}`;
    return this.http.get<StockData[]>(url);
  }
}
