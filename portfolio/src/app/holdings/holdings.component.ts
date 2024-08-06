import { Component, OnInit } from '@angular/core';
import { HoldingServiceService } from './holding-service.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})

export class HoldingsComponent implements OnInit {
  holdings: any[] = [];

  constructor(private holdingService: HoldingServiceService) {}

  ngOnInit(): void {
    this.loadHoldings();
  }

  loadHoldings(): void {
    this.holdingService.getHoldings().subscribe((holdings: any[]) => {
      this.holdings = holdings;
    });
  }
}