import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  ratings: number[] = Array.from(Array(5).keys());
  
  products: Product[] = [
    new Product(1, "Library Shelf 4 * 4 Metsdasdaasda", "Very good shelf for your home library and extending it to second line and so on and on and on", "https://i.ibb.co/Vq2vjrh/book-shelf.jpg", 45000, 50000, '10% Cashback', 4, false),
    new Product(2, "HP Laptop Elitebook X9403D", "Very good laptop for work from home", "https://i.ibb.co/W0yXWwX/laptop.png", 50000, 50000, '15% Cashback', 3, false),
    new Product(3, "Office Chair", "Very good chair for sitting, spinning, moving all over the place", "https://i.ibb.co/t2NRKsc/office-chair.jpg", 8000, 10000, '10% Cashback', 5, true),
    new Product(4, "Office Table", "Very good table for using desktop/laptop. Comes with five drawers in the side. The L shape makes it more productive", "https://i.ibb.co/mF2DN5x/office-table.jpg", 5000, 10000, '', 4, false)
  ];

  product: Product;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'));
    let id: number = parseInt(this.router.snapshot.paramMap.get('id'));
    console.log(this.products.find(prod => prod.id == id));

    this.product = this.products.find(prod => prod.id == id);
  }

  toggleFavourite() {
    this.product.isFavourite = !this.product.isFavourite;
  }

  addToCart() {
    console.log('addToCart');
  }

}
