import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss']
})
export class CardBigComponent implements OnInit {

  @Input() public imageCardSourceLink?: string;
  @Input() public title: string = 'Título';
  @Input() public text: string = 'Texto';
  @Input() public buttonText: string = 'Botão';
  @Input() public id: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public getImageSource(): string {
    if (this.imageCardSourceLink) {
      return `${this.imageCardSourceLink}`
    }

    return 'assets/images/default_placeholder.png'
  }

  public readModeAboutPost(id: number): void {
    this.router.navigateByUrl(`posts/${id}`)
  }

}
