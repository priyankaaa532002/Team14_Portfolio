import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BuySellRequest {
  ticker: string;
  trans_type: string; // "buy" or "sell"
  quantity: number;
  price_per_unit: number;
}

@Injectable({
  providedIn: 'root'
})
export class BuySellServiceService {

  private apiUrl = 'http://localhost:5000/actions/add_buy_sell';

  constructor(private http: HttpClient) { }

  submitBuySell(data: BuySellRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}