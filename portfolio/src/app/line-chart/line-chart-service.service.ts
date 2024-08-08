import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineChartServiceService {
  private apiUrl = 'http://localhost:5000/transactions/cumulative_values'; 

  constructor(private http: HttpClient) { }

  getCumulativeValues(): Observable<any[]> {
    // console.log(this.apiUrl);
    return this.http.get<any[]>(this.apiUrl);
  }
}
