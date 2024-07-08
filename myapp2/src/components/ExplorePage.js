import React from 'react';
import './ExplorePage.css';
import video1 from '../images/video1.mp4'; 
import video2 from '../images/video2.mp4'; 
import video3 from '../images/video3.mp4'; 
import video4 from '../images/video4.mp4'; 
import video5 from '../images/video5.mp4'; 

function ExplorePage() {
  return (
    <div className="explore-page">
      <h2>Explore Our Products and Services</h2>
      <div className="main-video">
        <video width="600" controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Watch this video to see our latest robot in action. Learn how it can simplify your tasks and enhance productivity with its cutting-edge technology.</p>
      </div>
      <div className="video-cards">
        <div className="video-card">
          <video width="300" controls>
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Robot Waiter Demonstration</h3>
          <p>Watch our robotic waiter in action. This demonstration highlights its capabilities and service efficiency.</p>
        </div>

        <div className="video-card">
          <video width="300" controls>
            <source src={video5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Customer Testimony</h3>
          <p>Hear from one of our satisfied customers about their experience with OTS robots in their business.</p>
        </div>

        <div className="video-card">
          <video width="300" controls>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Restaurant Demonstration</h3>
          <p>Watch a demonstration of how our robots operate in a restaurant setting, enhancing service and efficiency.</p>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
