import React, { useState } from 'react';
import './Users.css';
import group1 from '../images/images/group1.jpg';
import group2 from '../images/images/group2.jpg';
import group3 from '../images/images/group3.jpg';



const Users = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Holy Community ",
      image: group1,
      
    },
    {
      id: 2,
      name: "Shinchan Family ",
      image:group2,
      
    },
    {
      id: 3,
      name: "Tamil songs ",
      image: group3,
     
    },
    
    
])

  return (
    <div>
      
      <div className="card-container">
        {cartItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              
              <div className="button-container">
                <button className="add-button"> Join group</button>
                
              </div>
              <p className="card-text"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }


export default Users;
