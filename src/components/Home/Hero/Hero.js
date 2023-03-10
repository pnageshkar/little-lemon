import './hero.css';
import serve from '../../../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-info">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a Family-owned and Operated restaurant. We offer a
            wide range of fresh and delicious Mediterranean dishes that will
            delight you.
          </p>

          <Link  to="/Booking">
            <button className="btnPrimary">Reserve a table</button>
          </Link>
        </div>
        <div className="img-hero">
          <img src={serve} alt="Serve Food" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
