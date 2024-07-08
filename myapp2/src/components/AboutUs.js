import React from 'react';
import './AboutUs.css';
import companyPhoto from '../images/OTS.JPG'; // Assurez-vous d'avoir une image appropriée dans ce chemin

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="content">
        <img src={companyPhoto} alt="OTS Company" />
        <div className="description">
          <p><strong>OTS</strong> (Office Trading Services) is a Moroccan company specializing in the sale and rental of service robots. Our robots are primarily used in the hospitality, event, and retail sectors, especially for advertising campaigns. In partnership with a leading Chinese company, we provide innovative and reliable robotic solutions tailored to the needs of the Moroccan market. This site aims to showcase the products and services offered by OTS, facilitating easy navigation and information retrieval for our potential clients. It also aims to promote the benefits and features of our service robots, ensuring seamless and efficient interactions with our users. Additionally, the site seeks to strengthen our online presence and market reach.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
