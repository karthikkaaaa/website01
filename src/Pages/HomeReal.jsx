

import React, { useState } from "react";
// import Navbar from "../Components/Navbar";
// import cham from "../Assets/png/cham.jpg";
import { Link } from "react-router-dom";
import img1 from "../Assets/png/img1.jpg";
import cham from "../Assets/png/cham.jpg";
import cmp2 from "../Assets/png/cmp2.jpg";
import anth3 from "../Assets/png/anth3.jpg";
import event from "../Assets/png/event.jpg";
import anth6 from "../Assets/png/anth6.jpg";
import cli1 from "../Assets/png/cli1.jpg";
import cli2 from "../Assets/png/cli2.jpg";
import cli3 from "../Assets/png/cli3.jpg";
import cli6 from "../Assets/png/cli6.jpg";
import cli4 from "../Assets/png/cli4.jpg";
import cli5 from "../Assets/png/cli5.jpg";

import award from "../Assets/png/award.jpg";
import lauch3 from "../Assets/png/lauch3.jpg";
import party1 from "../Assets/png/party1.jpg";
import mus5 from "../Assets/png/mus5.jpg";
import lauch2 from "../Assets/png/lauch2.jpg";
import conference from "../Assets/png/conference.jpg";
import foot from "../Assets/png/foot.jpg";

import StatItem from "../Components/StatItem";




import "./homereal.css";

const HomeReal = () => {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <>
   <section className="hero">
  

  <img src={cham} alt="event" className="hero-img" />

  <div className="hero-content">
    <h1>The UK’s Best Event Management Agency</h1>
    <p>We create unforgettable experiences, managing every detail so your events shine.</p>
    
    <Link to="/contact">
  <button className="hero-btn">Book Now</button>
</Link>
  </div>
</section>


  
<section className="about-us-section">
  <div className="about-us-container">
    <div className="about-us-content">

      <div className="about-us-text-container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-subtitle">We Help Corporate to Manage Event</p>
        <p className="about-us-text">
        At Elite Event Management, we specialize in crafting unforgettable events across the UK. 
      From corporate gatherings to private celebrations, our expert team handles every detail 
      with creativity, precision, and passion, ensuring your vision comes to life seamlessly.
        </p>
      </div>

      <div className="about-us-image-container">
        <img src={img1} alt="About Us" className="about-us-image" />
      </div>

    </div>
  </div>
  <div className="stats-section">
  <StatItem end={2007} label="Established" />
  <StatItem end={130} label="Employees" />
</div>


</section>



<section className="featured-works">
  <h2 className="featured-title">Featured Works</h2>
  <p className="featured-subtitle">
    A glimpse of our most successful events
  </p>

  <div className="featured-grid">
    <div className="work-card">
      <img src={cmp2} alt="Corporate Event" />
      <h4>Corporate Meet</h4>
      <p>Professional corporate event planning with premium execution.</p>
    </div>

    <div className="work-card">
      <img src={anth3} alt="Product Launch" />
      <h4>Product Launch</h4>
      <p>Strategic product launch events that create buzz and leave a lasting
      impression.</p>
    </div>

    <div className="work-card">
      <img src={event} alt="Product Launch" />
      <h4>Press Event</h4>
      <p> Professionally managed press events ensuring strong media presence and
      brand visibility.</p>
    </div>

    <div className="work-card">
      <img src={anth6} alt="Company Picnic" />
      <h4>Company Picnic</h4>
      <p>  Fun-filled company picnics that strengthen team bonding and employee
      engagement.</p>
    </div>
  </div>
</section>



<section className="testimonials">
  <h2>What Our Clients Say</h2>
  <div className="testimonials-grid">
   
    <div className="testimonials-col">
      <div className="testimonial">
        <img src={cli1} alt="Client 1" className="client-photo" />
        <p className="client-text">
          "Elite Event Management made our corporate gala seamless and unforgettable. Highly recommended!"
        </p>
      </div>
      <div className="testimonial">
        <img src={cli2} alt="Client 2" className="client-photo" />
        <p className="client-text">
          "Professional, creative, and detail-oriented – they exceeded our expectations."
        </p>
      </div>
      <div className="testimonial">
        <img src={cli3} alt="Client 3" className="client-photo" />
        <p className="client-text">
          "Our annual conference was a huge success thanks to their dedicated team!"
        </p>
      </div>
    </div>

    <div className="testimonials-col">
      <div className="testimonial">
        <img src={cli4} alt="Client 4" className="client-photo" />
        <p className="client-text">
          "Elite Events transformed our vision into reality. Truly impressive service."
        </p>
      </div>
      <div className="testimonial">
        <img src={cli5} alt="Client 5" className="client-photo" />
        <p className="client-text">
          "From planning to execution, everything was flawless. Highly professional team."
        </p>
      </div>
      <div className="testimonial">
        <img src={cli6} alt="Client 6" className="client-photo" />
        <p className="client-text">
          "They brought creativity and organization to our corporate events like no one else!"
        </p>
      </div>
    </div>
  </div>
</section>






<section className="services">
  <h2>Our Services</h2>
  <h3>Corporate Event Management</h3>

  <p className="services-intro">
    We deliver seamless corporate events with precision, creativity, and professionalism,
    tailored to meet your business goals.
  </p>
  <Link to="/booking">
  <button className="services-btn">Book Now</button>
</Link>
  

  <div className="services-grid">
    <div className="service-card">
      <img src={conference} alt="Corporate Meetings" />
      <h4>Corporate Meetings</h4>
      <p>Professional planning and execution for impactful business meetings.</p>
    </div>

    <div className="service-card">
      <img src={lauch2} alt="Conferences" />
      <h4>Conferences</h4>
      <p>End-to-end management of large-scale conferences and seminars.</p>
    </div>

    <div className="service-card">
      <img src={lauch3} alt="Product Launch" />
      <h4>Product Launches</h4>
      <p>Creative launches that capture attention and build brand excitement.</p>
    </div>

    <div className="service-card">
      <img src={award} alt="Award Ceremonies" />
      <h4>Award Ceremonies</h4>
      <p>Elegant and memorable award nights planned to perfection.</p>
    </div>

    <div className="service-card">
      <img src={mus5} alt="Team Building" />
      <h4>Team Building Events</h4>
      <p>Engaging activities that strengthen teamwork and collaboration.</p>
    </div>

    <div className="service-card">
      <img src={party1} alt="Corporate Parties" />
      <h4>Corporate Parties</h4>
      <p>Stylish corporate parties designed to impress your guests.</p>
    </div>
  </div>
</section>



<section
  className="cta-section"
  style={{ backgroundImage: `url(${foot})` }}
>
  <div className="cta-overlay">
    <h2>Let’s Make Your Event Memorable!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
    <Link to="/booking">
  <button className="services-btn">Book Now</button>
</Link>
  </div>
</section>

  </>
  );
};

export default HomeReal;
