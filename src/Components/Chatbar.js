import React, { useState } from 'react';
import './Chatbox.css'
import pic1 from '../images/images/dp0.png'
import pic2 from '../images/images/dp1.png'
import pic3 from '../images/images/dp2.png'
import pic4 from '../images/images/dp3.png'
import pic5 from '../images/images/dp4.png'
import pic6 from '../images/images/dp5.png'
import pic7 from '../images/images/dp6.png'
import pic8 from '../images/images/dp7.png'
import pic9 from '../images/images/dp8.png'
import pic10 from '../images/images/dp9.png'
 

const Chatbar = (props) => {
  const [state, setState] = useState([
    {id:1, image:pic1,  name:"Sowndarya"},
    {id:2, image:pic2,  name:"Swetha"},
    {id:3, image:pic3,  name:"Amrisha"},
    {id:4, image:pic4,  name:"Bala"},
    {id:5, image:pic5,  name:"Venkatesh"},
    {id:6, image:pic6,  name:"Vidhya"},
    {id:7, image:pic7,  name:"Rohit"},
    {id:8, image:pic8,  name:"Moni"},
    {id:9, image:pic9,  name:"Sri"},
    {id:10, image:pic10,  name:"Vignesh"},

  ]);
  
  

  return (
    <div className='chatbar'>
      {state.map(user => (
        <div className='chatbar_list' key={user.id}>
          <div className='chatbar_list_img'>
            <img src={user.image} alt='User Profile' />
            <span className='status'></span>
          </div>
          <div className='chatbar_list_name'>{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Chatbar;
