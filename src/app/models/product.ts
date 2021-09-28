export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string = '',
    public price: number = 0,
    public imageUrl: string = 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2021_kid%E2%80%99s-favorite-butter-cookie_ice-cream-sandwich_18781_600x600.jpg?ext=.jpg',
    public category: string = '',
    public size: number = 0
  ) {}
}
