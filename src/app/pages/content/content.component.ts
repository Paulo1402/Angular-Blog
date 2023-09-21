import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataFakeService } from 'src/app/services/data-fake.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentParagraphs: string[] = [];

  private id: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private dataFaker: DataFakeService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => (this.id = Number(value.get('id')))
    );

    this.setCardContent(this.id);
  }

  setCardContent(id: number | null) {
    const card = this.dataFaker.getCard(id)

    if (!card) {
      this.router.navigate(['error', '404']);
      return
    }

    const contentDescription = card.cardDescription;
    const contentParagraphs = contentDescription.split('\n')

    this.contentTitle = card.cardTitle;
    this.contentParagraphs = contentParagraphs
    this.photoCover = card.photoCover;
  }
}
