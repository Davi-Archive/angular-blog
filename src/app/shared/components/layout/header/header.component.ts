import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public images: string[] = ["assets/images/julius_mob.jpg", "assets/images/julius_mob.jpg", "assets/images/julius_mob.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
