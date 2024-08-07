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

  
interface Ticker {
  ticker: string;
}

interface TickerInfo {
  info: {
    "52WeekChange": number;
    "longName": string;
    "currentPrice": number;
  };
}

interface SearchResult {
  ticker: string;
  longName: string;
}

@Injectable({
  providedIn: 'root'
})

export class NewWatchlistServiceService {
  private apiUrl = 'http://localhost:5000/actions/historical_data';
  private tickersUrl = 'http://localhost:5000/watchlist';
  private tickerInfoUrl = 'http://localhost:5000/actions/get_ticker';
  private searchUrl = 'http://localhost:5000/actions/search_ticker';

  constructor(private http: HttpClient) { }

  getStockData(ticker: string, startDate: string, endDate: string): Observable<StockData[]> {
    const url = `${this.apiUrl}?ticker=${ticker}&start_date=${startDate}&end_date=${endDate}`;
    return this.http.get<StockData[]>(url);
  }

  getTickers(): Observable<Ticker[]> {
    return this.http.get<Ticker[]>(this.tickersUrl);
  }
  getTickerInfo(ticker: string): Observable<TickerInfo> {
    const url = `${this.tickerInfoUrl}?ticker=${ticker}`;
    return this.http.get<TickerInfo>(url);
  }

  searchTickers(query: string): Observable<SearchResult[]> {
    const url = `${this.searchUrl}?query=${query}`;
    return this.http.get<SearchResult[]>(url);
  }
}
