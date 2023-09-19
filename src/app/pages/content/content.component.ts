import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => (this.id = Number(value.get('id')))
    );
    
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: number | null) {
    const result = dataFake.find((article) => article.id === id)

    if(result) {
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo
    }
  }
}
