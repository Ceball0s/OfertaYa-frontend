import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuctionCardComponent } from './components/auction-card/auction-card.component'; // Importa el componente
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuctionCardComponent],    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oferta-ya';
}
