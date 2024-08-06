import { Component, OnInit } from '@angular/core';
import { NetworthServiceService } from './networth-service.service';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrl: './networth.component.css'
})
export class NetworthComponent implements OnInit{
  networth: any;

  constructor(private networthService: NetworthServiceService) {}

  ngOnInit(): void {
    this.fetchNetworth();
  }

  fetchNetworth(): void {
    this.networthService.getNetworth().subscribe(
      data => {
        this.networth = data.networth;
        console.log('Networth fetched:', this.networth);
      },
      error => {
        console.error('Error fetching networth', error);
      }
    );
  }

}
