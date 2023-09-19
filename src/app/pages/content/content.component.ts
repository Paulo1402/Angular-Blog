import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() photoCover: string = ''
  @Input() contentTitle: string = ''
  @Input() contentDescription: string = ''
}
