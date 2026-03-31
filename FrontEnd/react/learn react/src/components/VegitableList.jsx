import React from "react";

const VegetableList = () => {
  const vegetables = [
    { name: "carrot", color: "orange", price: 30 },
    { name: "potato", color: "brown", price: 20 }
  ];

  return (
    <div>
      <h2>Vegetables List</h2>

      {vegetables.map((veg, index) => (
        <div key={index}>
          <p>Name: {veg.name}</p>
          <p>Color: {veg.color}</p>
          <p>Price: ₹{veg.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default VegetableList;