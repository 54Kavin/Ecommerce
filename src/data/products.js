import headphone from "../imgpic/headphone.jpg"
import beanie from "../imgpic/beanie.jpg";
import projecter from "../imgpic/projecter.jpg";
import bag from "../imgpic/bag.jpg";
import ceramic from "../imgpic/ceramic.jpg";
import wallet from "../imgpic/wallet.jpg";
import hat from "../imgpic/hat.jpg";
import keyboard from "../imgpic/keyboard.jpg";
import pan from "../imgpic/pan.jpg";
import s24 from "../imgpic/s24.png";
import shoes from "../imgpic/shoes.jpg";
import shorts from "../imgpic/shorts.jpg";
import sunglasses from "../imgpic/sunglasses.jpg";
import sweater from "../imgpic/sweater.jpg";
import tea from "../imgpic/tea.jpg";
import watch from "../imgpic/watch.jpg";
import lamp from "../imgpic/lamp.jpg";
const PRODUCTS_DB = [
  { id: 1, name: "Obsidian Wireless Headphones", category: "Electronics", price: 299, originalPrice: 399, rating: 4.8, reviews: 2341, images: headphone, badge: "Bestseller", description: "Premium noise-cancelling audio with 40hr battery" },
  { id: 2, name: "Frost Mechanical Keyboard", category: "Electronics", price: 189, originalPrice: 229, rating: 4.6, reviews: 876, images: keyboard, badge: "New", description: "Tactile RGB switches, aluminum frame" },
  { id: 3, name: "Phantom Slim Wallet", category: "Accessories", price: 59, originalPrice: 79, rating: 4.9, reviews: 5432, images: wallet, badge: "Top Rated", description: "Ultra-thin RFID-blocking genuine leather" },
  { id: 4, name: "Onyx Running Shoes", category: "Footwear", price: 149, originalPrice: 199, rating: 4.7, reviews: 1203, images: shoes, badge: "Sale", description: "Carbon-fiber plate, responsive foam midsole" },
  { id: 5, name: "Sage Merino Wool Sweater", category: "Clothing", price: 129, originalPrice: 169, rating: 4.5, reviews: 654, images: sweater, badge: null, description: "100% merino, temperature regulating" },
  { id: 6, name: "Titanium Travel Mug", category: "Kitchen", price: 49, originalPrice: 65, rating: 4.8, reviews: 3210, images: tea, badge: "Bestseller", description: "24hr cold, 12hr hot, leak-proof" },
  { id: 7, name: "Noir Sunglasses", category: "Accessories", price: 89, originalPrice: 120, rating: 4.4, reviews: 421, images: sunglasses, badge: null, description: "Polarized UV400, lightweight titanium frame" },
  { id: 8, name: "Smart Fitness Watch", category: "Electronics", price: 349, originalPrice: 449, rating: 4.7, reviews: 1876, images: watch, badge: "New", description: "ECG, SpO2, GPS, 7-day battery" },
  { id: 9, name: "Linen Bucket Hat", category: "Clothing", price: 39, originalPrice: 55, rating: 4.3, reviews: 289, images: hat, badge: "Sale", description: "Stonewashed linen, packable design" },
  { id: 10, name: "Ceramic Pour-Over Set", category: "Kitchen", price: 79, originalPrice: 99, rating: 4.9, reviews: 892, images: ceramic, badge: "Top Rated", description: "Hand-thrown ceramic, with bamboo stand" },
  { id: 11, name: "Vegan Leather Backpack", category: "Accessories", price: 179, originalPrice: 229, rating: 4.6, reviews: 1543, images: bag, badge: null, description: "15\" laptop compartment, recycled materials" },
  { id: 12, name: "Minimalist Desk Lamp", category: "Electronics", price: 119, originalPrice: 149, rating: 4.5, reviews: 743, images: lamp, badge: "New", description: "Touch dimming, USB-C charging, 5 color temps" },
  { id: 13, name: "Trail Running Shorts", category: "Clothing", price: 69, originalPrice: 89, rating: 4.4, reviews: 567, images: shorts, badge: null, description: "Quick-dry, 4-way stretch, hidden pocket" },
  { id: 14, name: "Cast Iron Skillet", category: "Kitchen", price: 89, originalPrice: 110, rating: 4.9, reviews: 4321, images: pan, badge: "Bestseller", description: "Pre-seasoned, lifetime warranty" },
  { id: 15, name: "Cashmere Beanie", category: "Clothing", price: 79, originalPrice: 109, rating: 4.7, reviews: 1234, images: beanie, badge: null, description: "Grade A Mongolian cashmere, ribbed knit" },
  { id: 16, name: "Portable Projector", category: "Electronics", price: 499, originalPrice: 649, rating: 4.5, reviews: 432, images: projecter, badge: "Sale", description: "1080p, 300 lumens, built-in Dolby audio" },
  { id: 17, name: "Mobile Phone", category: "Electronics", price: 1299, originalPrice: 2299, rating: 4.8, reviews: 879, images: s24, badge: "Sale", description: "portable wireless device for communcation" },
];

export default PRODUCTS_DB;
