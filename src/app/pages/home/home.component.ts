import { Component, OnInit } from '@angular/core';
import { DataFakeService, Card } from 'src/app/services/data-fake.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bigCards: Card[] = [];
  smallCards: Card[] = [];

  constructor(private dataFake: DataFakeService) {}

  ngOnInit(): void {
    const cards = this.dataFake.getCards()

    const bigCards = cards.slice(0, 1);
    const bigCardsWithDescriptionExcerpt = bigCards.map(this.summarizeDescription)

    this.bigCards = bigCardsWithDescriptionExcerpt;
    this.smallCards = cards.slice(1);
  }

  summarizeDescription(card: Card): Card {
    const description = card.cardDescription
    const descriptionExcerpt = description.substring(0, 300) + '...'

    return Object.assign({}, card, { cardDescription: descriptionExcerpt})
  }
}
