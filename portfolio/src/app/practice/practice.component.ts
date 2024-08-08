import { Component } from '@angular/core';
import { PrserviceService } from './prservice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  constructor(private PracticeService :PrserviceService){}
  add(): void {
    // console.log(ticker)
    this.PracticeService.addTickerToWatchlist().subscribe(
      response => {
        console.log('Ticker added to watchlist', response);
        // Optionally show a confirmation message or update the UI
        alert(`Ticker  added to watchlist.`);
      },
      error => {
        console.error('Error adding ticker to watchlist', error);
        // Optionally show an error message
        alert('Failed to add ticker to watchlist.');
      }
    );
    // const data = {
    //   "ticker" : this.ticker
    // }
  }

}
