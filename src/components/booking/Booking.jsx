import OpenTable, { positions } from "react-opentable";
import reso from '../../img/booking.jpg';
import "react-opentable/dist/index.css";
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
          <div className="filler">
            <img src={reso} alt="" />
          </div>
          <div className="otStyle">
            <OpenTable
              customClassName="openTableWidget"
              newtab={true}
              rid="123123"
              type="standard"
              lang="en-US"
              iframe={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
