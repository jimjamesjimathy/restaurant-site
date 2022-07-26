import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import aboutImg from "../../img/about-img.jpg";
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
            <p className="about-info info1">
              Come visit our newly updated location at 1031 Literary Road, in
              Cleveland's Tremont neighborhood. With a brand new kitchen, we are
              serving entrees, appetizers and sandwiches 6 days a week. We are
              open for lunch Monday through Saturday and Happy Hour is from 3 -
              6 pm.
            </p>
            <p className="about-info info2">
              A favorite of area locals for many years, we are located in one of
              the oldest buildings in Tremont. We have worked hard to preserve
              the character of the historic location and offer an intimate
              atmosphere, inventive cocktails and a variety of wine and beers,
              chef made entrees and appetizers.
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
