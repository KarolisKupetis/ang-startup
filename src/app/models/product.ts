export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  size: number;

  constructor(
    id: number,
    name: string,
    description: string = '',
    price: number = 0,
    imageUrl: string = 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2021_kid%E2%80%99s-favorite-butter-cookie_ice-cream-sandwich_18781_600x600.jpg?ext=.jpg',
    category: string = '',
    size: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.size = size;
  }
}
