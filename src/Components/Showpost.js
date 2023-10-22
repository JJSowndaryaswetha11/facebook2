import React from 'react';
import './Create.css';
import { FaRegCommentAlt, FaRegThumbsUp, FaShareAlt } from 'react-icons/fa';

const Showpost = (props) => {
  return (
    <div className='show'>
      <div className='show_header'>
        <div className='show_header-img'>
          <img src={props.profilepic} alt='Profile' />
        </div>
        <div className="show_header_name">
         {props.name}
          <div className="date">
            {new Date(props.timestamp?.toDate()).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="show_body">
        <div className="show_body_text">
          {props.message}
        </div>
        {props.image && (
          <div className="show_body_img">
            <img src={props.image} alt='Post Image' />
          </div>
        )}
      </div>
      <div className="show_reaction">
        <span className='reactions'>
            <FaRegThumbsUp/> <span className='reactions-text'>Like</span>
        </span>
        <span className='reactions'>
            <FaRegCommentAlt/> <span className='reactions-text'>Comments</span>
        </span>
        <span className='reactions'>
            <FaShareAlt/> <span className='reactions-text'>Share</span>
        </span>

      </div>
    </div>
  );
};

export default Showpost;
