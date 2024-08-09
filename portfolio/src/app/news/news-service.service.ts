import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface NewsItem {
  link: string;
  // publisher: string;
  // ticker: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private apiUrl = 'http://localhost:5000/actions/get_news'; // API URL

  constructor(private http: HttpClient) { }

  // Method to fetch news items from the API
  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.apiUrl);
  }
}
