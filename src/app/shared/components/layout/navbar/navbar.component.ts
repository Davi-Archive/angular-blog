import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isTheNavbarCollapsed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public colapseOrShowNavbar(): string {
    if (this.isTheNavbarCollapsed) {
      this.isTheNavbarCollapsed = false;
      return '';
    }
    this.isTheNavbarCollapsed = true;
    return 'collapse'

  }

}
