

import { Link } from "react-router-dom";

import "./about.css";
import us2 from "../Assets/png/us2.jpg";
import us4 from "../Assets/png/us4.jpg";
import tm3 from "../Assets/png/tm3.jpg";
import us3 from "../Assets/png/us3.jpg";
import tm1 from "../Assets/png/tm1.jpg";

import tm2 from "../Assets/png/tm2.jpg";
import cli4 from "../Assets/png/cli4.jpg";
import foot from "../Assets/png/foot.jpg";



import { useEffect, useRef, useState } from "react";

const StatItem = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    let start = 0;
    const duration = 2000; 
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <div className="stat-item" ref={ref}>
      <h3>{count}</h3>
      <p>{label}</p>
    </div>
  );
};

const countersData = [
  { id: 1, label: "Employees", value: 50 },
  { id: 2, label: "Events", value: 120 },
  { id: 3, label: "Outlets", value: 10 },
  { id: 4, label: "Clients", value: 75 },
];

const AboutUs = () => {
  return (
    <>
    <section className="services-page">
     
      <header className="services-header">
        <h1>About Us</h1>
        <p>Elite Events delivers professional corporate planning services.</p>
      </header>

     
      <div className="services-banner">
        <img src={us2} alt="Elite Events" />
      </div>

     
<div className="ceo-section">
  <div className="ceo-image">
    <img src={tm3} alt="CEO - Elite Events" />
  </div>

  <div className="ceo-content">
    <h2>Our Founder & CEO</h2>
    <h3>Mr. John Alexander</h3>

    <p>
      With over a decade of experience in corporate event management,
      Mr. John Alexander has been the driving force behind Elite Events.
      His vision is rooted in precision, professionalism, and innovation,
      ensuring every event delivers measurable business impact.
    </p>

    <p>
      Under his leadership, Elite Events has successfully managed
      high-profile corporate conferences, executive meetings, and
      large-scale business events across multiple locations.
    </p>

    <ul className="ceo-achievements">
      <li>✔ 10+ Years in Corporate Event Strategy</li>
      <li>✔ 120+ Successful Corporate Events</li>
      <li>✔ Trusted Partner for Leading Enterprises</li>
      <li>✔ Recognized for Operational Excellence</li>
    </ul>
  </div>
</div>


    
      <div className="stats-section">
        {countersData.map((counter) => (
          <StatItem
            key={counter.id}
            end={counter.value}
            label={counter.label}
          />
        ))}
      </div>

      
      <div className="about-section">
        <div className="about-img">
          <img src={us3} alt="Our Team" />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a team of experienced event professionals driven by precision,
            planning, and performance. From initial consultation to post-event
            evaluation, our approach is structured, transparent, and focused on
            delivering measurable success.
            <br /><br />
            Our expertise spans corporate meetings, seminars, conferences, and
            executive events, ensuring every detail—from timelines to logistics—
            is handled with care and professionalism.
          </p>
        </div>
      </div>

     
      <div className="about-section reverse">
        <div className="about-img">
          <img src={us4} alt="Our Work" />
        </div>

        <div className="about-text">
          <h2>What We Do</h2>
          <p>
            We provide comprehensive event planning services that cover strategy,
            coordination, vendor management, and on-site execution. Our goal is
            to remove complexity for our clients while maintaining complete
            control over quality and outcomes.
            <br /><br />
            By combining creative thinking with operational excellence, we
            ensure every event is delivered on time, within scope, and aligned
            with your brand and business objectives.
          </p>
        </div>
      </div>

    
<div className="feature-cards">
  <div className="feature-card tall">
    <img src={tm2} alt="CEO" />
    <div className="card-footer">
      <h4>sunny Alexander</h4>
      <span>Exicutive manager</span>
    </div>
  </div>

  <div className="feature-card short">
    <img src={tm1} alt="Operations Head" />
    <div className="card-footer">
      <h4>Michael Roberts</h4>
      <span>Head of Operations</span>
    </div>
  </div>

  <div className="feature-card tall">
    <img src={cli4} alt="Creative Director" />
    <div className="card-footer">
      <h4>Sarah Williams</h4>
      <span>Creative Director</span>
    </div>
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

  
    <Link to="/contact">
  <button className="cta-btn">Book Now</button>
</Link>
  </div>
</section>
    </>
  );
};

export default AboutUs;

