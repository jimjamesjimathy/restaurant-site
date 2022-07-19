import './reviews.css';
import image from '../../img/testimonials/1.jpg';

const Reviews = () => {
  return (
    <section class="testimonials-section sec-padding" id="testimonials">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>Reviews</h2>
        </div>
      </div>
      <div class="row">
        <div class="testi-item" data-aos="zoom-out-right" data-aos-offset="250" data-aos-duration="1000">
          <div class="testi-author">
            <div class="testi-author-name">
              <h3>James Kirkwood</h3>
              <span>food eater</span>
            </div>
            <div class="testi-author-img">
              <img src={image} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum, aliquam sed provident consequuntur adipisci voluptates? Accusamus tempore sapiente doloribus.</p>
          <div class="ratings">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>

        <div class="testi-item" data-aos="zoom-out-up" data-aos-offset="250" data-aos-duration="1000">
          <div class="testi-author">
            <div class="testi-author-name">
              <h3>James Kirkwood</h3>
              <span>food eater</span>
            </div>
            <div class="testi-author-img">
              <img src={image} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum, aliquam sed provident consequuntur adipisci voluptates? Accusamus tempore sapiente doloribus.</p>
          <div class="ratings">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>

        <div class="testi-item" data-aos="zoom-out-left" data-aos-offset="250" data-aos-duration="1000">
          <div class="testi-author">
            <div class="testi-author-name">
              <h3>James Kirkwood</h3>
              <span>food eater</span>
            </div>
            <div class="testi-author-img">
              <img src={image} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum, aliquam sed provident consequuntur adipisci voluptates? Accusamus tempore sapiente doloribus.</p>
          <div class="ratings">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
};

export default Reviews;
