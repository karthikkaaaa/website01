import "./footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>Elite Event Management</h3>
          <p>
            Ornare eget varius aliquet vehicula fermentum commodo, dolor, dolor amet,
            ut velit lacus cursus et, tortor mollis lacus lectus aliquam velit justo
            nibh fermentum fermentum.
          </p>
          <div className="footer-socials">
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaFacebookF /></a>
  </div>
        </div>
       


        <div className="footer-col">
          <h4>Quick Link</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Works</li>
            <li>Our Services</li>
            <li>Contact Us</li>
            <li>Get a Quote</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Capability</h4>
          <ul>
            <li>Full-Service Production</li>
            <li>Event Management</li>
            <li>Food & Beverages</li>
            <li>Live Performances</li>
            <li>Destination Management</li>
            <li>Company Picnic</li>
          </ul>
         
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>
            Trafalgar Square, Charing Cross,<br />
            London WC2N 5DN, United Kingdom.
          </p>
          <p>📞 +44 123 456 7890</p>
          <p>✉️ info@example.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Event Management Agency</p>
        <p>Powered by Event Management Agency</p>
      </div>
    </footer>
  );
};

export default Footer;
