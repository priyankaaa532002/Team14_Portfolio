import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworthServiceService {

  private apiUrl = 'http://localhost:5000/actions/networth';

  constructor(private http: HttpClient) { }

  getNetworth(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
