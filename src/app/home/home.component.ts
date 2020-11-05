import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [
    new Product(1, "Library Shelf 4 * 4 Metsdasdaasda", "Very good shelf for your home library and extending it to second line and so on and on and on", "https://i.ibb.co/Vq2vjrh/book-shelf.jpg", 45000, 50000, '10% Cashback', 4, false),
    new Product(2, "HP Laptop Elitebook X9403D", "Very good laptop for work from home", "https://i.ibb.co/W0yXWwX/laptop.png", 50000, 50000, '15% Cashback', 3, false),
    new Product(3, "Office Chair", "Very good chair for sitting, spinning, moving all over the place", "https://i.ibb.co/t2NRKsc/office-chair.jpg", 8000, 10000, '10% Cashback', 5, true),
    new Product(4, "Office Table", "Very good table for using desktop/laptop. Comes with five drawers in the side. The L shape makes it more productive", "https://i.ibb.co/mF2DN5x/office-table.jpg", 5000, 10000, '', 4, false)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
