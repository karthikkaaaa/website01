

import { Link } from "react-router-dom";
import services from "../data/services.json";
import our from "../Assets/png/our.jpg";
import foot from "../Assets/png/foot.jpg";

import "./services.css";

const Services = () => {
  return (
    <>
    <section className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Elite Events delivers professional corporate planning services.</p>
      </header>

      <div className="services-banner">
        <img src={our} alt="Elite Event Services" />
      </div>

      <div className="services-overview">
        <p>
          We help corporates plan and execute events with precision.<br />
          From strategy to execution, Elite Events delivers structured,
          seamless, and professional corporate event experiences.
        </p>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/booking?service=${encodeURIComponent(service.title)}`}
            className="service-link"
          >
            <div className="service-card">
              <div className="service-img">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="process-section">
        <h2>Our Process</h2>
        <p className="process-subtitle">We Handle Everything for You</p>

        <div className="process-timeline">
          <div className="process-step left">
            <h4>01. Initial Inquiry</h4>
            <p>
              We begin by understanding your requirements, goals, and
              expectations to plan your event perfectly.
            </p>
          </div>

          <div className="process-step right">
            <h4>02. Pre-Production</h4>
            <p>
              Detailed planning, scheduling, coordination, and preparation
              before execution.
            </p>
          </div>

          <div className="process-step left">
            <h4>03. Walkthrough</h4>
            <p>
              Reviewing every step with you to ensure clarity and smooth
              execution.
            </p>
          </div>

          <div className="process-step right">
            <h4>04. Quote</h4>
            <p>
              Transparent and detailed pricing based on your event
              requirements.
            </p>
          </div>

          <div className="process-step left">
            <h4>05. Production</h4>
            <p>
              Executing the event with precision and professional coordination.
            </p>
          </div>

          <div className="process-step right">
            <h4>06. Delivery</h4>
            <p>
              Successful completion of the event with quality and satisfaction.
            </p>
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

export default Services;
