import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{
  errorCode: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.errorCode = params.get('errorCode') ?? ''
      this.errorMessage = this.getErrorDescription(this.errorCode)
    })
  }

  getErrorDescription(errorCode: string): string {
    switch (errorCode) {
      case '404':
        return 'Página não encontrada!'
      case '500':
        return 'Erro interno do servidor!'
      default:
        return 'Um erro ocorreu!'
    }
  }
}
