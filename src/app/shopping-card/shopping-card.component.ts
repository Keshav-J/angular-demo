import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  @Input() product: Product;

  ratings: number[] = Array.from(Array(5).keys());

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavourite() {
    this.product.isFavourite = !this.product.isFavourite;
  }

  addToCart() {
    console.log('addToCart');
  }

  nextPage(product) {
    console.log(product);
  }

  log(msg) {
    console.log(msg);
  }
}
