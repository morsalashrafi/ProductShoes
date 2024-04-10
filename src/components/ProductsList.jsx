import ProductCard from "./ProductCard";
import Blue from "../assets/image/blue.png";
import SX695 from "../assets/image/71UI97LMRYL._SY695_.jpg";
import Pink from "../assets/image/pink.png";
import Yellow from "../assets/image/yellow.png";
import SY695 from "../assets/image/515ogDlrQcL._SY695_.jpg";
import VXPYkKEEL from "../assets/image/71vXPYkKEEL._SY695_.jpg";
import UJMGzyasL from "../assets/image/71UJMGzyasL._SY695_.jpg";
import VfkOL3iRL from "../assets/image/41viC1L-JaL.jpg";

const products = [
  {
    id: 1,
    title: "Adidas Mens Duramo",
    description:
      "AdidasOyster Men's Flat Sole Hi-Top Casual Lace up Sneakers with Translucent Rubber",
    imageUrl: Blue,
    date: "2020-03-01T20:45:20.616Z",
    price: 5.675,
    rate: 2.4,
  },
  {
    id: 2,
    title: "Bacca Bucci ",
    description: " Bacca Bucci/Trekking outdoor boots for men for Beginners",
    imageUrl: SX695,
    date: "2023-04-30T20:45:20.616Z",
    price: 9.274,
    rate: 5,
  },
  {
    id: 3,
    title: "Adidas Mens Tivid R.rdy",
    description:
      "Liberty Shoes Limited, 13th mile stone old G.T. Road Bastara Village Kutail",
    imageUrl: Pink,
    date: "2021-08-03T20:45:20.616Z",
    price: 4.3,
    rate: 3.3,
    titleSale: "Sale",
  },
  {
    id: 4,
    title: "Adidas Mens Hike Lacer",
    description:
      "adidas India Marketing Pvt. Ltd, Adidas India Marketing Private Ltd.",
    imageUrl: Yellow,
    date: "2023-01-01T20:45:20.616Z",
    price: 2.274,
    rate: 3.5,
  },
  {
    id: 5,
    title: "ATOM Spring Edge",
    description:
      "ATOM Spring Edge Double Density PU-Nitrile Heat Resistant Upto 300 Degree Celsius, Leather Safety Shoe",
    imageUrl: SY695,
    date: "2023-10-10T20:45:20.616Z",
    price: 60.074,
    rate: 1.9,
  },
  {
    id: 6,
    title: "Kraasa Casual",
    description:
      "Kraasa Synthetic Boots Outsole for Swag, Travel, Parties, Dancing, Dating, for Men Sneakers",
    imageUrl: VXPYkKEEL,
    date: "2022-09-12T20:45:20.616Z",
    price: 14.02,
    rate: 5,
  },
  {
    id: 7,
    title: "Bacca Bucci Superstar",
    description:
      "Bacca Bucci Men's Mars Classic Hi-Top Fashion Sneakers | Casual Shoes for Men",
    imageUrl: UJMGzyasL,
    date: "2021-07-02T20:45:20.616Z",
    price: 1.174,
    rate: 4.1,
  },
  {
    id: 8,
    title: "Bollero Men's Grey",
    description:
      "Bollero Men's Grey Suede Leather High Top Sneakers Hiking Trekking Bike Riding Casual Ankle Boots",
    imageUrl: VfkOL3iRL,
    date: "2023-11-11T20:45:20.616Z",
    price: 17.44,
    rate: 2.8,
  },
];

function ProductsList() {

  /*console.log(
    "Image paths:",
    products.map((product) => product.imageUrl)
  );*/
  
  return (
    <div>
      <div className="products-list">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductsList;
