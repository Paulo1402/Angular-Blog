import { Injectable } from '@angular/core';
import { dataFake } from '../data/dataFake';

export interface Card {
  id: number;
  cardTitle: string;
  cardDescription: string;
  photoCover: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataFakeService {
  getCards(): Card[] {
    return dataFake
  }

  getCard(id: number | null): Card | undefined {
    return dataFake.find((card) => card.id === id)
  }
}
