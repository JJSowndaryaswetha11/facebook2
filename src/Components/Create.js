import React, { useState } from 'react';
import dp1 from '../images/images/profile1.jpg';
import './Create.css';
import { FaRegFile, FaRegGrinAlt, FaVideo } from 'react-icons/fa';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import db from './FireBase';

const Create = (props) => {
  const [user, setUser] = useState({
    name: "sowndarya",
    profilepic: dp1
  });

  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handlesubmit = () => {
    addDoc(collection(db, "posts"), {
      message,
      user: user.name, 
      image,
      timestamp: Timestamp.fromDate(new Date()),
      profilepic: user.profilepic
    }).then(() => {
      props.fetchposts();
      setImage("");
      setMessage("");
    });
  };

  return (
    <div className='create'>
      <div className='create_first'>
        <div className="create_first_img">
          <span><img src={dp1} alt='profile' /></span>
        </div>
        <div className="create_first-input">
          
          <input
            type='text'
            className='create_first-inputs'
            placeholder="Harsha, what's on your mind?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <button onClick={handlesubmit}>Post</button>
        </div>
      </div>
      <div className="create_second">
        <span className='create_second_icon'>
          
          <FaVideo className='red' /><span className='text'>Live video</span>
        </span>
        <span className='create_second_icon'>
          <FaRegFile className='green' /><span className='text'>Photo/Video</span>
        </span>
        <span className='create_second_icon'>
          <FaRegGrinAlt className='orange' /><span className='text'>Feelings/Activity</span>
        </span>
      </div>
    </div>
  );
};

export default Create;
