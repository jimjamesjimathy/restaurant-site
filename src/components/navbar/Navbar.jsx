import { GiKnifeFork } from 'react-icons/gi';
import './navbar.css';



const Navbar = () => {

  function toggleNav() {
      const navToggler = document.querySelector('.nav-toggler');
      navToggler.classList.toggle('active');
      document.querySelector('.nav').classList.toggle('open');
      navToggler.addEventListener('click', !toggleNav);
  };

  window.addEventListener('scroll', function() {
    if(this.scrollY > 800) {
        document.querySelector('.header').classList.add('sticky');
    } else {
        document.querySelector('.header').classList.remove('sticky');
    }
});


  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content align-items">
          <div className="logo">
            <a className='litLogo' href="/">
              <GiKnifeFork size='75px'/>
              LIT
            </a>
          </div>
          <button type="button" className="nav-toggler" onClick={toggleNav}>
            <span></span>
          </button>
          <nav className="nav">
            <ul>
              <li className="nav-item">
                <a onClick={toggleNav} className="nav-item-a" href="#home">home</a>
              </li>
              <li className="nav-item">
                <a onClick={toggleNav} className="nav-item-a" href="#about">about</a>
              </li>
              <li className="nav-item">
                <a onClick={toggleNav} className="nav-item-a" href="#our-menu">menu</a>
              </li>
              <li className="nav-item">
                <a onClick={toggleNav} className="nav-item-a" href="#testimonials">reviews</a>
              </li>
              <li className="nav-item">
                <a onClick={toggleNav} className="nav-item-a" href="#booking">Booking</a>
              </li>
              <li className="nav-item">
                <a onClick={toggleNav} className="nav-item-a" href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
