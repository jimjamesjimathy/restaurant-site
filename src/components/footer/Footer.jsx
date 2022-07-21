import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import './footer.css';



const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row">
          <div className="footer-item">
            <h3>Our location</h3>
            <p>
              123 Ave, SnorkleTown, <br /> WA, 98737
            </p>
          </div>
          <div className="footer-item">
            <h3>Hours of Operation</h3>
            <p>
              Monday to Sunday <br /> 11:00am - 1:45am
            </p>
          </div>
          <div className="footer-item">
            <h3>Contact Us</h3>
            <p>(216) 420-6969</p>
            <p>hotmale@hotmail.com</p>
            <div className="social-links">
              <a href="#">
                <AiFillFacebook />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="copyright">&copy; 2022 - Jambone</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
