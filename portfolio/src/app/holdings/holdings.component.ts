import { Component, OnInit } from '@angular/core';
import { HoldingServiceService } from './holding-service.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})

export class HoldingsComponent implements OnInit {
  holdings: any[] = [];
  transactions: any[] = [];
  selectedTicker: string = '';
  isModalOpen: boolean = false;

  constructor(private holdingService: HoldingServiceService) {}

  ngOnInit(): void {
    this.loadHoldings();
  }

  loadHoldings(): void {
    this.holdingService.getHoldings().subscribe((holdings: any[]) => {
      this.holdings = holdings;
    });
  }


  onRowClick(ticker: string): void {
    this.selectedTicker = ticker;
    this.isModalOpen = true;
    this.loadTransactions(ticker);
  }

  loadTransactions(ticker: string): void {
    this.holdingService.getTransactionsByTicker(ticker).subscribe((transactions: any[]) => {
      this.transactions = transactions;
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}