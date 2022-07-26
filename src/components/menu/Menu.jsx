import { useEffect, useState } from "react";
import {
  sharePlates,
  saladsVeggies,
  entrees,
  sandwiches,
  drinks,
  charcuterie,
} from "../../data";
import "./menu.css";

const Menu = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState();
  const [active, setActive] = useState("");

  useEffect(() => {
    setList(charcuterie);
  }, []);

  useEffect(() => {
    if (category === "share-plates") setList(sharePlates);
    if (category === "salads-veggies") setList(saladsVeggies);
    if (category === "entrees") setList(entrees);
    if (category === "sandwiches") setList(sandwiches);
    if (category === "drinks") setList(drinks);
    if (category === "charcuterie") setList(charcuterie);
  }, [category]);

  function handleClick(e) {
    setActive(e.target.id);
    setCategory(e.target.value);
  }

  return (
    <section className="menu-section sec-padding" id="our-menu">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>our menu</h2>
          </div>
        </div>
        <div className="row">
          <div className="menu-tabs">
            <button
              onClick={handleClick}
              className={
                active === "6" ? "menu-tab-item active" : "menu-tab-item"
              }
              id={"6"}
              value="charcuterie"
            >
              Cheese & Charcuterie
            </button>
            <button
              onClick={handleClick}
              className={
                active === "1" ? "menu-tab-item active" : "menu-tab-item"
              }
              id={"1"}
              value="share-plates"
            >
              Share Plates
            </button>
            <button
              onClick={handleClick}
              className={
                active === "2" ? "menu-tab-item active" : "menu-tab-item"
              }
              id={"2"}
              value="salads-veggies"
            >
              Salads & Veggies
            </button>
            <button
              onClick={handleClick}
              className={
                active === "3" ? "menu-tab-item active" : "menu-tab-item"
              }
              id={"3"}
              value="entrees"
            >
              Entrees
            </button>
            <button
              onClick={handleClick}
              className={
                active === "4" ? "menu-tab-item active" : "menu-tab-item"
              }
              id={"4"}
              value="sandwiches"
            >
              Sandwiches
            </button>
            <button
              onClick={handleClick}
              className={
                active === "5" ? "menu-tab-item active" : "menu-tab-item"
              }
              id={"5"}
              value="drinks"
            >
              Drinks
            </button>
          </div>
        </div>

        <div className="map-wrap">
          {list.map((item) => (
            <div className="row menu-tab-content" key={item.id}>
              <div
                className="menu-item"
                data-aos="zoom-in"
                data-aos-offset="-100px"
                data-aos-duration="1000"
              >
                <div className="menu-item-title">
                  <h3>{item.name}</h3>
                  <p>{item.ingredients}</p>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
