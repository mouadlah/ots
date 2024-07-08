import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';
import robot1 from '../images/intro_robot.png';
import robot2 from '../images/robo2.png';
import robot3 from '../images/robot3.png';
import robot4 from '../images/robot4.png';
import robot5 from '../images/robot5.png';
import business from '../images/business.jpg';

function MainContent() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore');
  };

  const handleCollaborateClick = () => {
    navigate('/dashboard');
  };

  const handleJoinClick = () => {
    navigate('/schedule');
  };

  return (
    <main>
      <section className="hero">
        <h1>Discover the latest in robotic solutions</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search robots" />
          <button>Search</button>
        </div>
      </section>

      <section className="offerings">
        <h2>Our innovative offerings</h2>
        <div className="cards">
          <div className="card">
            <img src={robot1} alt="Solution overview" />
            <h3>Solution overview</h3>
            <p>Find the perfect service. Explore our range of robotic solutions for various industries.</p>
          </div>
          <div className="card">
            <img src={robot2} alt="Robot features" />
            <h3>Robot features</h3>
            <p>Select a robot service. Get closer to experiencing cutting-edge robotic solutions.</p>
          </div>
          <div className="card">
            <img src={robot3} alt="Service benefits" />
            <h3>Service benefits</h3>
            <p>Place your order. Sit back and relax as our robots cater to your needs efficiently.</p>
          </div>
        </div>
      </section>

      <section className="join-us">
        <h2>Join OTS Solutions</h2>
        <div className="cards">
          <div className="card">
            <img src={robot4} alt="Robot operator" />
            <h3>Robot operator</h3>
            <p>Operate service robots for diverse tasks. Join our team with your expertise.</p>
            <button onClick={handleJoinClick}>Join now</button>
          </div>

          <div className="card">
            <img src={business} alt="Business partnership" />
            <h3>Business partnership</h3>
            <p>Enhance business with robotic solutions for improved operations and customer experience.</p>
            <button onClick={handleCollaborateClick}>Discover Charts</button>
          </div>
          <div className="card">
            <img src={robot5} alt="Team collaboration" />
            <h3>Team collaboration</h3>
            <p>Contribute to building cutting-edge robotic services with a dynamic team.</p>
            <button onClick={handleJoinClick}>Join the team</button>
          </div>
        </div>
      </section>
      <section className="experience">
        <h2>Experience our technology</h2>
        <div className="explore">
          <h3>Explore effortlessly!</h3>
          <p>Discover innovative robotic solutions at Office Trading Services. Experience top-notch service robots for various industries.</p>
          <button onClick={handleExploreClick}>Explore now</button>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
