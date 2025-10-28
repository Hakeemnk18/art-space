// src/data/products.ts

export interface IProduct {
  id: number;
  imageUrl: string;
  scrollUrl: string;
  category: string;
  title: string;
  price: number;
  showPrice: string;
  url: string;
  isNewArrivals: boolean;
  isFeatured: boolean;
}

// Your product data now lives here
export const products: IProduct[] = [
  {
    id: 1,
    imageUrl: "/images/macrame mirror.png",
    scrollUrl: "/images/mirror-scroll.png", // <-- Added
    category: "Wall Decor",
    title: "Macrame Mirror",
    price: 700,
    showPrice: "₹700",
    url: "/products/category=Wall Decor",
    isNewArrivals: false,
    isFeatured: true,
  },
  {
    id: 2,
    imageUrl: "/images/flower-bouquet.jpg",
    scrollUrl: "/images/flower-bouquet.jpg", // <-- Added
    category: "Bouquets",
    title: "Flower Bouquet",
    price: 75,
    showPrice: "₹75",
    url: "/products/floral-meadow-hoop",
    isNewArrivals: true,
    isFeatured: true,
  },
  {
    id: 3,
    imageUrl: "/images/generated-image (2).png",
    scrollUrl: "/images/Gemini_Generated_Image_vt1jctvt1jctvt1j.png", // <-- Added
    category: "Wedding Supplies",
    title: "Nikah Nama BookLet",
    price: 900,
    showPrice: "₹900",
    url: "/products/sunset-peony-burst",
    isNewArrivals: true,
    isFeatured: true,
  },
  {
    id: 4,
    imageUrl:
      "/images/WhatsApp Image 2025-10-17 at 21.32.34_4e82f4e7-frame.jpg",
    scrollUrl: "/images/gemini-frame.png", // <-- Added
    category: "Frame",
    title: "Spotify Frame",
    price: 450,
    showPrice: "₹450",
    url: "/products/oceanic-octopus-tote",
    isNewArrivals: true,
    isFeatured: true,
  },
  {
    id: 5,
    imageUrl: "/images/generated-image (2)-gift-box.png",
    scrollUrl: "/images/gift-box-scroll.png", // <-- Added
    category: "Gift",
    title: "GIft Box",
    price: 350,
    showPrice: "₹350",
    url: "/products/floral-meadow-hoop",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 6,
    imageUrl: "/images/art-frame.png",
    scrollUrl: "/images/art-frame.png", // <-- Added
    category: "Frame",
    title: "Arabic Calligraphy Frame",
    price: 1000,
    showPrice: "₹1000",
    url: "/products/sunset-peony-burst",
    isNewArrivals: true,
    isFeatured: true,
  },
  {
    id: 7,
    imageUrl: "/images/groom-frame.jpg",
    scrollUrl: "/images/groom-frame.jpg", // <-- Added
    category: "Frame",
    title: "Nikah Nama Frame",
    price: 650,
    showPrice: "₹650",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  
  {
    id: 8,
    imageUrl: "/images/flower-bouquet-white.png",
    scrollUrl: "/images/flower-bouquet-white.png", // <-- Added
    category: "Bouquets",
    title: "Ribbon Flower Bouquet",
    price: 75,
    showPrice: "₹75",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 9,
    imageUrl: "/images/Gemini_white-tot-bag.png",
    scrollUrl: "/images/Gemini_white-tot-bag.png", // <-- Added
    category: "Tote Bag",
    title: "Hand Printed Tote Bag",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: true,
    isFeatured: true,
  },
  {
    id: 10,
    imageUrl: "/images/Gemini_pic-bouquet.png",
    scrollUrl: "/images/Gemini_pic-bouquet.png", // <-- Added
    category: "Bouquets",
    title: "Polaroid Bouquet",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 11,
    imageUrl: "/images/Gemini_black-tot-bag.png",
    scrollUrl: "/images/Gemini_black-tot-bag.png", // <-- Added
    category: "Tote Bag",
    title: "Hand Printed Tote Bag",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 12,
    imageUrl: "/images/Gemini_open-gift-box.png",
    scrollUrl: "/images/Gemini_open-gift-box.png", // <-- Added
    category: "Gift",
    title: "Hamper Box",
    price: 350,
    showPrice: "₹350",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 13,
    imageUrl: "/images/Gemini_black-tot-2.png",
    scrollUrl: "/images/Gemini_black-tot-2.png", // <-- Added
    category: "Tote Bag",
    title: "Hand Printed Tote Bag",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 14,
    imageUrl: "/images/Gemini_frame-2.png",
    scrollUrl: "/images/Gemini_frame-2.png", // <-- Added
    category: "Frame",
    title: "Photo Frame",
    price: 350,
    showPrice: "₹350",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 15,
    imageUrl: "/images/Gemini_tot-whit-bag-2.png",
    scrollUrl: "/images/Gemini_tot-whit-bag-2.png", // <-- Added
    category: "Tote Bag",
    title: "Hand Printed Tote Bag",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 16,
    imageUrl: "/images/Gemini_black-tot-4.png",
    scrollUrl: "/images/Gemini_black-tot-4.png", // <-- Added
    category: "Tote Bag",
    title: "Hand Printed Tote Bag",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 17,
    imageUrl: "/images/Gemini_tot-black-5.png",
    scrollUrl: "/images/Gemini_tot-black-5.png", // <-- Added
    category: "Tote Bag",
    title: "Hand Printed Tote Bag",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 18,
    imageUrl: "/images/generated-image (2)-sweet.png",
    scrollUrl: "/images/Gemini_sweet.png", // <-- Added
    category: "Gift",
    title: "Engagement Hamper",
    price: 350,
    showPrice: "₹350",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 19,
    imageUrl: "/images/Gemini_frame-4.png",
    scrollUrl: "/images/Gemini_frame-4.png", // <-- Added
    category: "Frame",
    title: "Name Calligraphy",
    price: 350,
    showPrice: "₹350",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 20,
    imageUrl: "/images/Gemini_pic_card.png",
    scrollUrl: "/images/Gemini_pic_card.png", // <-- Added
    category: "Gift",
    title: "Polaroid",
    price: 7,
    showPrice: "₹7",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 21,
    imageUrl: "/images/Gemini_black-tot-6.png",
    scrollUrl: "/images/Gemini_black-tot-6.png", // <-- Added
    category: "Tote Bag",
    title: "Hand Printed Tote Bag",
    price: 400,
    showPrice: "₹400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  },
  {
    id: 22,
    imageUrl: "/images/Gemini_Generated_Image_x401qax401qax401.png",
    scrollUrl: "/images/Gemini_Generated_Image_x401qax401qax401.png", 
    category: "Bouquets",
    title: "Flower Bouquet",
    price: 1400,
    showPrice: "₹1400",
    url: "/products/sunset-peony-burst",
    isNewArrivals: false,
    isFeatured: false,
  }
];
