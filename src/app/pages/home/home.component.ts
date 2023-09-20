import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

interface ICard {
  id: number;
  cardTitle: string;
  cardDescription: string;
  photoCover: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  smallCards: ICard[] = [];
  bigCards: ICard[] = [];

  ngOnInit(): void {
    this.bigCards = dataFake.slice(0, 1);
    this.smallCards = dataFake.slice(1);
  }
}
