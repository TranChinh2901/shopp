import React from "react";
import "../styles/Cards.css";

function Cards({ item, handleClick }) {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p className="p1">{title}</p>
        <p>{author}</p>
        <p>Giá: {price}</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
}

export default Cards;
