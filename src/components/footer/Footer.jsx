import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import './footer.css';



const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row contact-info">
          <div className="footer-item">
            <h3>Our location</h3>
            <p>
              1031 Literary Rd. <br /> Cleveland, OH 44113
            </p>
          </div>
          <div className="footer-item">
            <h3>Hours of Operation</h3>
            <p>
              Monday to Sunday <br /> 11:00am - 1:00am
            </p>
          </div>
          <div className="footer-item">
            <h3>Contact Us</h3>
            <p>216.862.1916</p>
            <div className="social-links">
              <a href="https://www.facebook.com/literarytavern" rel='noreferrer' target="_blank">
                <AiFillFacebook />
              </a>
              <a href="https://www.instagram.com/literary_tavern/" rel='noreferrer' target="_blank">
                <AiFillInstagram />
              </a>
              <a href="#" rel='noreferrer' target="_blank">
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
