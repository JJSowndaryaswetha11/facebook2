import React from 'react';
import './Cart.css'; // Import your CSS file
import product1 from '../images/images/watch.jpg';
import product2 from '../images/images/joker.jpg';
import product3 from '../images/images/coolers.jpg';
import product4 from '../images/images/mencooler.jpg'
import product5 from '../images/images/dress.jpg'
import product6 from '../images/images/dresss.jpg'

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "WROGN Men Silver-Toned Analogue Watch",
      image: product1,
      price:2000
    },
    {
      id: 2,
      name: "VAN HEUSEN Analog Watch",
      image: product2,
      price:750
    },
    {
      id: 3,
      name: "Cold Grey Cateye Sunglasses",
      image: product3,
      price:800
    },
    {
      id: 4,
      name: "Vincent Chase",
      price:850,
      
      image: product4,
    },
    {
      id: 5,
      name: "Easy-iron shirt Slim Fit",
      price:900,
      
      image: product5,
    },
    {
      id: 6,
      name: "SLEEVE MIDI - Shirt dress",
      
      image: product6,
      price:1250
    },
    
  ];

  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <button className="buttons">{product.price}</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
