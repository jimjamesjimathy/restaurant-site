import About from './components/about/About';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Reviews from './components/reviews/Reviews';
import Booking from './components/booking/Booking';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
