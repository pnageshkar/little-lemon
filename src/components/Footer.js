import '../App.css';
import FootLogo from '../assets/footer-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src= {FootLogo} alt="Logo" />
      </div>
      <div className="nav-links">
        <div className="nav-links-column">
          <h2>Navigation</h2>
          <ul className='links'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="nav-links-column">
          <h2>Contact</h2>
          <ul className='links'>
            <li>12 S Michigan Ave,</li>
            <li>Chicago Il 60603</li>
            <br></br>
            <li>(312) 792-3502</li>
            <br></br>
            <a
              href="mailto: contact@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              Email @littlelemon.com
            </a>
          </ul>
          
        </div>
        <div className="nav-links-column">
          <h2>Social Media</h2>
          <ul className='links'>
            <li>
            <a
              href="https://www.instagram.com/littlelemon/"
              target="_blank"
              rel="noreferrer"
            >Instagram</a>
            </li>
            <li>
            <a
              href="https://www.facebook.com/thelittlelemon/"
              target="_blank"
              rel="noreferrer"
            >Facebook</a>
            </li>
            <li>
            <a
              href="https://www.youtube.com/@littlelemon880"
              target="_blank"
              rel="noreferrer"
            >Youtube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
