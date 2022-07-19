import OpenTable, { positions } from 'react-opentable';
import 'react-opentable/dist/index.css';
import "./booking.css";

const Booking = () => {
  return (
    <section class="team-section sec-padding" id="booking">
      <div class="container">
        <div class="row">
          <div class="section-title">
            <h2>Have dinner with us</h2>
          </div>
        </div>
        <div className="row openTable">
          <div className="otStyle">
            <OpenTable
              rid="123123"
              customClassName="openTableWidget"
              type="standard"
              theme="wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
