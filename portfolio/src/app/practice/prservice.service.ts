import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrserviceService {
  private tickersUrl = 'http://localhost:5000/watchlist/put';

  constructor(private http: HttpClient) { }
  addTickerToWatchlist(): Observable<any> {
    // const data = {
    //   "ticker" : ticker
    // }
    // const url = this.tickersUrl;
    // console.log(data);
    return this.http.post<any>(this.tickersUrl,{"ticker" : "QTWO"});
  }
}
