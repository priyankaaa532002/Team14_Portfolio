import { Component } from '@angular/core';
import { NewsServiceService } from './news-service.service';

export interface NewsItem {
  link: string;
  // publisher: string;
  // ticker: string;
  title: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})

export class NewsComponent {
  newsItems: NewsItem[] = [];

  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (data: NewsItem[]) => {
        this.newsItems = data;
      },
      (error: any) => {
        console.error('Error fetching news data', error);
      }
    );
  }
}
