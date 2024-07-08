import React from 'react';
import './BlogPage.css';
import P1 from '../images/P1.jpeg';
import P2 from '../images/P2.jpeg';
import P3 from '../images/P3.jpeg';
import P4 from '../images/P4.jpeg';
import P5 from '../images/P5.jpeg';
import P6 from '../images/P6.png';

function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Service Robots in Hospitality",
      description: "Discover how service robots are revolutionizing the hospitality industry. From automating room service to enhancing guest experiences, learn about the latest trends and innovations...",
      image: P1
    },
    {
      title: "Service Robots in Retail: Enhancing Customer Experience",
      description: "Explore the impact of service robots in the retail sector. Learn how robots are being used to assist customers, manage inventory, and create a seamless shopping experience...",
      image: P2
    },
    {
      title: "Event Management: How Robots are Making a Difference",
      description: "Delve into the world of event management with service robots. Understand how robots can streamline operations, engage attendees, and provide unique experiences at events...",
      image: P3
    },
    {
      title: "Advertising with Service Robots: A New Frontier",
      description: "Learn about the innovative ways service robots are being used in advertising. From interactive displays to personalized marketing, discover how robots are transforming the ad industry...",
      image: P4
    },
    {
      title: "The Technical Aspects of Service Robots",
      description: "Understand the technical components and advancements in service robots. Explore the latest in AI, machine learning, and robotics technology driving these intelligent machines...",
      image: P5
    },
    {
      title: "Customer Success Stories with OTS Robots",
      description: "Read about the success stories of our clients who have integrated OTS service robots into their operations. Learn how our robots have improved efficiency and customer satisfaction...",
      image: P6
    },
  ];

  return (
    <div className="blog-page">
      <h2>Our Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
