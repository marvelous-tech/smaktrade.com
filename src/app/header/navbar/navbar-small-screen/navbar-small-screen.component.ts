import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-small-screen',
  templateUrl: './navbar-small-screen.component.html',
  styleUrls: ['./navbar-small-screen.component.scss']
})
export class NavbarSmallScreenComponent implements OnInit {
  dropdownOpen: boolean = false;
  navbarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

}
