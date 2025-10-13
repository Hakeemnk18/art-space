import type { IProduct } from "../data/product";

export const toFilteredProduct = (option: string, products:IProduct[]): IProduct[]=>{

    let sorted:IProduct[] = [];
    switch (option) {
      case "All":
        sorted = products;
        break
      case "Bouquets":
        sorted = products.filter((item)=> item.category.toLowerCase() === "bouquets")
        console.log(sorted)
        break;
      case "Tot Bag":
        sorted = products.filter((item)=> item.category.toLowerCase()  === "tot bag")
        break;
      case "Embroidery":
        sorted = products.filter((item)=> item.category.toLowerCase()  === "embroidery")
        break;
      default:
        return products;
    }

    return sorted
}