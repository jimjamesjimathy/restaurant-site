import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import aboutImg from '../../img/about-img.jpg';
import "./about.css";

const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="about-section sec-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>About Us</h2>
          </div>
        </div>
        <div className="row about-content">
          <div
            className="about-text"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
          >
            <h3>Welcome to Literary Tavern</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              vel magni. Expedita tempora nam sequi earum molestiae omnis
              reprehenderit aliquid, corrupti deleniti eligendi sit dignissimos
              ullam illo quia necessitatibus eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              vel magni. Expedita tempora nam sequi earum molestiae omnis
              reprehenderit aliquid, corrupti deleniti eligendi sit dignissimos
              ullam illo quia necessitatibus eius.
            </p>
            <a href="#our-menu" className="btn btn-default">
              view menu
            </a>
          </div>
          <div
            className="about-img"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1000"
          >
            <div className="img-box">
              <h3>since 1809</h3>
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
