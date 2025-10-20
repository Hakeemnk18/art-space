import type { IProduct } from "../data/product";

export const toFilteredProduct = (
  option: string,
  products: IProduct[]
): IProduct[] => {
  let sorted: IProduct[] = [];
  switch (option) {
    case "All":
      sorted = products;
      break;
    case "Bouquets":
      sorted = products.filter(
        (item) => item.category.toLowerCase() === "bouquets"
      );
      break;
    case "Wall Decor":
      "Wedding Supplies";
      sorted = products.filter(
        (item) => item.category.toLowerCase() === "wall decor"
      );
      break;
    case "Tot Bag":
      sorted = products.filter(
        (item) => item.category.toLowerCase() === "tot bag"
      );
      break;
    case "Embroidery":
      sorted = products.filter(
        (item) => item.category.toLowerCase() === "embroidery"
      );
      break;
    case "Frame":
      sorted = products.filter(
        (item) => item.category.toLowerCase() === "frame"
      );
      break;
    case "Wedding Supplies":
      
      sorted = products.filter(
        (item) => item.category.toLowerCase() === "wedding supplies"
      );
      break;
    case "Gift":
      sorted = products.filter(
        (item) => item.category.toLowerCase() === "gift"
      );
      break;
    default:
      return products;
  }
  console.log("sorted ", sorted);

  return sorted;
};
