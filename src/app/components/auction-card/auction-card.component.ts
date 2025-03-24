import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent {
  @Input() title: string = 'Subasta';
  @Input() price: number = 100;
  @Input() timeLeft: string = '2h 30m';
  constructor() { }
}
