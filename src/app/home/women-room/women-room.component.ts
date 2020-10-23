import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-women-room',
  templateUrl: './women-room.component.html',
  styleUrls: ['./women-room.component.scss']
})
export class WomenRoomComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
