import { reviews } from '../../data';
import { AiTwotoneStar } from 'react-icons/ai';
import './reviews.css';



const Reviews = () => {
  return (
    <section className="testimonials-section sec-padding" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Reviews</h2>
          </div>
        </div>

        <div className="row item-row">
          {reviews.map((item) => (
            <div
              className="testi-item"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              key={item.id}
            >
              <div className="testi-author">
                <div className="testi-author-name">
                  <h3>{item.name}</h3>
                  <span>{item.title}</span>
                </div>
                <div className="testi-author-img">
                  <img src={item.img} alt="" />
                </div>
              </div>
              <div className='desc-wrap'>
                <p>{item.desc}</p>
              </div>
              <div className="ratings">
                <button><AiTwotoneStar /></button>
                <button><AiTwotoneStar /></button>
                <button><AiTwotoneStar /></button>
                <button><AiTwotoneStar /></button>
                <button><AiTwotoneStar /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
