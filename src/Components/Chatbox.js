import React from 'react';
import dp1 from '../images/images/dp0.png';
import './Chatbox.css';
import { FaPhone, FaRegWindowClose, FaVideo } from 'react-icons/fa';

const Chatbox = (props) => {
   
  return (
    <>
     {props.state ? (<div className='chat'>
      <div className='chat_header'>
        <div className='chat_header_img'>
          <img src={dp1} alt='chatpic' />
        </div>
        <div className='chat_header_details'>
          <div className='chat_header_name'>Sowndarya</div>
          <div className='chat_header_icons'>
            <FaVideo className='chat_header_icon' />
            <FaPhone className='chat_header_icon' />
            <FaRegWindowClose className='chat_header_icon' />
          </div>
        </div>
        
        </div>
        <div className='Chat_body'>
            <div className="chat_left">
                <p className="msg">Lorem ipsum dolor sit amet  </p>
            </div>
            <div className="chat_right">
                <p className="msg">Lorem ipsum  sit dufjffbjc </p>
            </div>
           < div className="chat_left">
                <p className="msg">Lorem ipsum dolor sit amet  </p>
            </div>
            <div className="chat_right">
                <p className="msg">Lorem ipsum sdd </p>
            </div>
            
            </div>
            <div className='chat_footer'>
                <input type='text' className='chat_input ' placeholder='Aa'>

                </input>
            </div>
      </div>) : ""}
    
      </>
    
  );
};

export default Chatbox;

