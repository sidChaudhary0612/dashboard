import { Component } from '@angular/core';
import { topCards } from './top-cards.json';
@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css']
})
export class TopCardsComponent {
topCards=topCards
}
