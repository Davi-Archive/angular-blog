import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.scss']
})
export class CardSmallComponent implements OnInit {

  @Input() public title: string = 'Título';
  @Input() public text: string = 'Texto';
  @Input() public buttonText: string = 'Botão';
  @Input() public id: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToPostWithId(id: number) {
    console.log(id)
    //this.router.navigateByUrl(`/posts/${id}`)
  }

}
