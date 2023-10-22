

import React, { useState } from 'react';
import './Users.css';
import pic1 from '../images/images/profile1.jpg';
import pic2 from '../images/images/prfile2.jpg';
import pic3 from '../images/images/profile3.jpg';
import pic4 from '../images/images/profile4.jpg';
import pic5 from '../images/images/girl.jpg';
import pic6 from '../images/images/boy.jpg';


const Users = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: " D Bala venkatesh ",
      image: pic1,
      text:"1004 followers"
    },
    {
      id: 2,
      name: " S Shruthi ",
      image:pic2,
      text:"75 followers"
    },
    {
      id: 3,
      name: "K Priya",
      image: pic3,
      text:"85 followers"
    },
    {
      id: 4,
      name: "M Prakash",
      image:pic4,
      text:"95 followers"
    },
    {
      id: 5,
      name: "G Ishwarya",
      image: pic5,
      text:"105 followers"
    },
    {
      id: 6,
      name: "K Mohan",
      image: pic6,
      text:"775 followers"
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
              <h5 className='card-text'>{item.text}</h5>
              <div className="button-container">
                <button className="add-button"> + Add friend</button>
                
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
