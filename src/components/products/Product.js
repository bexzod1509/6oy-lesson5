import React from "react";
import "./Product.css";
import gas from "./gas.avif";
import phone from "./phone.avif";
import gas2 from "./gas2.avif";
import refrigerator from "./refregirator.avif";
import refrigerator2 from "./refregirator2.avif";
import wash from "./washmachine.avif";
function Product() {
  const data = [
    {
      id: 1,
      image: phone,
      title: "Galaxy S24 Ultra, 256GB (US Cellular)",
      price: "Save up to $750.",
      discount: " From $1299.99 before eligible trade-in.",
    },
    {
      id: 2,
      image: wash,
      title:
        "Bespoke 5.3 cu. ft. All-in-One AI Laundry Combo Ultra Capacity Washer and Ventless Heat Pump Dryer",
      price: "Save $1100. ",
      discount: "From $2199",
    },
    {
      id: 3,
      image: refrigerator,
      title: "23 cu. ft. Bespoke 4-Door Flex Refrigerator with AI Family Hub",
      price: "Save $1200. ",
      discount: " From $3899",
    },
    {
      id: 4,
      image: gas2,
      title:
        "Bespoke 6.3 cu. ft. Slide-in Electric Range with Air Sous Vide & Air Fry",
      price: "Save $600.",
      discount: "From $1399",
    },
    {
      id: 5,
      image: refrigerator2,
      title:
        "Bespoke 4-Door French Door Refrigerator (29 cu. ft.) with Beverage Center",
      price: "Save $1200. ",
      discount: " From $2199",
    },
    {
      id: 6,
      image: gas,
      title:
        "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &Illuminated Precision Knobs",
      price: "Save $600.",
      discount: "From $1499",
    },
  ];
  let cards = data?.map((e) => (
    <div key={e.id} className="products">
      <img src={e.image} alt="" />
      <h1>{e.title}</h1>
      <h2>{e.price}</h2>
      <h3>{e.discount}</h3>
    </div>
  ));
  return (
    <div className="container">
      <h1 className="a">Shop all latest offers and innovations</h1>
      <div className="links">
        <a className="a1" href="#">
          For You
        </a>
        <a href="#">Mobile & Computing</a>
        <a href="#">TV & Audio</a>
        <a href="#">Home Appliances</a>
        <a href="#">Samsung Live</a>
        <a href="#">For Business</a>
      </div>
      <div className="container">
        <div className="card">{cards}</div>
      </div>
    </div>
  );
}

export default Product;
