import './footer.css';



const Footer = () => {
  return (
    <footer class="footer" id="contact">
      <div class="container">
        <div class="row">
          <div class="footer-item">
            <h3>Our location</h3>
            <p>
              123 Ave, SnorkleTown, <br /> WA, 98737
            </p>
          </div>
          <div class="footer-item">
            <h3>Hours of Operation</h3>
            <p>
              Monday to Sunday <br /> 11:00am - 1:45am
            </p>
          </div>
          <div class="footer-item">
            <h3>Contact Us</h3>
            <p>(216) 420-6969</p>
            <p>hotmale@hotmail.com</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="copyright">&copy; 2022 - Jambone</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
