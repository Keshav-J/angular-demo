export class Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  actual_price: number;
  old_price: number;
  offer: string;
  rating: number;
  isFavourite: boolean;
  
  constructor(id: number,
              name: string,
              desc: string,
              image: string,
              actual_price: number,
              old_price: number,
              offer: string,
              rating: number,
              isFavourite: boolean) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.image = image;
    this.actual_price = actual_price;
    this.old_price = old_price;
    this.offer = offer;
    this.rating = rating;
    this.isFavourite = isFavourite;
  }
}