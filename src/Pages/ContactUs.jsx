import "./contact.css";
import us1 from "../Assets/png/us1.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2n5opgq",
        "template_a0qhzzx",
        formRef.current,
        "fi_c4mFR2v8mTJytc"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
       
        <div className="contact-image">
          <img src={us1} alt="Contact Us" />
        </div>

       
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you</p>

          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
