import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import '../Components/video.css'
import pic1 from '../images/images/profile1.jpg';

const ShowPost = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      userImg: pic1,
      name: "Shakil Khan",
      time: "2h",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      videoLink: "https://www.youtube.com/embed/t0Q2otsqC4I?autoplay=0&modestbranding=1", 
    },
    {
      id: 2,
      userImg: pic1,
      name: "Sajjad Khan",
      time: "4h",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
     videoLink:"https://www.youtube.com/embed/1F3hm6MfR1k?si=zO-Q37dzJj4QAHPZ"
    },
   
  ]);

  return (
    <div className="shows">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            {post.videoLink && (
              <div className="show__body-video">
                <iframe
                  width="560"
                  height="315"
                  src={post.videoLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded YouTube Video"
                ></iframe>
              </div>
            )}
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
