import React from 'react'
import './Posts.css'
import image1 from '../images/images/image1.jpg'
import image2 from '../images/images/image2.jpg'
import image3 from '../images/images/image3.jpg'
import image4 from '../images/images/image4.jpg'
import profile1 from '../images/images/profile1.jpg'
import profile2 from '../images/images/prfile2.jpg'
import profile3 from '../images/images/profile3.jpg'
import profile4 from '../images/images/profile4.jpg'

const Stories = () => {
  return (
    <div className='stories'>
      <div className='stories_col'>
        <div className='stories_body'>
          <img src={image1} alt='dp1'></img>
          <div className='stories_body_overlay'>
          <div className='stories_body_overlay-img'>
              <img src={profile2} alt='stories'></img>
            </div>
            <div className="stories_body_name">Sowndarya</div>
          </div>
           
        </div>

      </div>
      <div className='stories_col'>
        <div className='stories_body'>
        <img src={image2} alt='dp1'></img>
          <div className='stories_body_overlay'>
            <div className='stories_body_overlay-img'>
              <img src={profile3} alt='stories'></img>
            </div>
            <div className="stories_body_name">Swetha</div>
          </div>
           
        </div>

      </div>
      <div className='stories_col'>
        <div className='stories_body'>
        <img src={image3} alt='dp1'></img>
          <div className='stories_body_overlay'>
          <div className='stories_body_overlay-img'>
              <img src={profile1} alt='stories'></img>
            </div>
          <div className="stories_body_name">Bala</div>
          </div>
           
        </div>

      </div>
      <div className='stories_col'>
        <div className='stories_body'>
        <img src={image4} alt='dp1'></img>
          <div className='stories_body_overlay'>
          <div className='stories_body_overlay-img'>
              <img src={profile4} alt='stories'></img>
            </div>
          <div className="stories_body_name">Venkatesh</div>
          </div>
           
        </div>

      </div>

    </div>
  )
}

export default Stories