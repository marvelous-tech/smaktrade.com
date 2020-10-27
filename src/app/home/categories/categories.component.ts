import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: {
    name: string,
    img: string,
    links: {
      name: string,
      routerLink: string[],
      queryParams: {}
    }[]
  }[] = [
    {
      name: "Sweater",
      img: "https://hw-media.herworld.com/public/2017/12/video/76783649_m.jpg",
      links: [
        {
          name: "Men's",
          routerLink: ['/collections'],
          queryParams: {category: 'Men', product: 'Sweater'}
        },
        {
          name: "Women's",
          routerLink: ['/collections'],
          queryParams: {category: 'Women', product: 'Sweater'}
        },
        {
          name: "Kid's",
          routerLink: ['/collections'],
          queryParams: {search: 'Kid', product: 'Sweater'}
        }
      ]
    },
    {
      name: "Knit",
      img: "https://i.pinimg.com/originals/8e/a2/5b/8ea25b0a99f3a12dc230768acc9a95a5.jpg",
      links: [
        {
          name: "Men's",
          routerLink: ['/collections'],
          queryParams: {category: 'Men', product: 'Knit'}
        },
        {
          name: "Women's",
          routerLink: ['/collections'],
          queryParams: {category: 'Women', product: 'Knit'}
        },
        {
          name: "Kid's",
          routerLink: ['/collections'],
          queryParams: {search: 'Kid', product: 'Knit'}
        }
      ]
    },
    {
      name: "Woven",
      img: "https://eterna24.com.ua/wp-content/uploads/2016/06/kak-slozhit-rubashku.jpg",
      links: [
        {
          name: "Men's",
          routerLink: ['/collections'],
          queryParams: {category: 'Men', product: 'Woven'}
        },
        {
          name: "Women's",
          routerLink: ['/collections'],
          queryParams: {category: 'Women', product: 'Woven'}
        },
        {
          name: "Kid's",
          routerLink: ['/collections'],
          queryParams: {search: 'Kid', product: 'Woven'}
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
