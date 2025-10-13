import type { IProduct } from "../data/product";

export const toSortedProduct = (type: string, products: IProduct[]): IProduct[] => {
    
    let sorted:IProduct[] = [];
    switch (type) {
      case "A - Z":
        sorted = products.slice().sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z - A":
        sorted = products.slice().sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Price - Low to High":
        sorted = products.slice().sort((a, b) => a.price - b.price);
        break;
      case "Price - High to Low":
        sorted = products.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        return products;
    }

    return sorted
  }