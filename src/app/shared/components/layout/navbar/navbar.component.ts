import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isTheNavbarOpen: boolean = false;
  public navbarColapseClass: string = 'collapse';

  constructor() { }

  ngOnInit(): void {
  }



  public collapseOrShowNavbar(): void {
    if (this.isTheNavbarOpen) {
      this.isTheNavbarOpen = false;
      this.navbarColapseClass = 'collapse'
    }
    else {
      this.isTheNavbarOpen=true;
      this.navbarColapseClass = ''
    }
  }

}
