import './footer.css';
import FootLogo from '../../assets/footer-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
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
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Menu">Menu</a>
            </li>
            <li>
              <a href="/Reservations">Reservations</a>
            </li>
            <li>
              <a href="/Order">Order</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
          </ul>
        </div>
        <div className="nav-links-column">
          <h2>Contact</h2>
          <ul className='links'>
            <li>12 S Michigan Ave,</li>
            <li>Chicago IL 60603</li>
            
            <li>Tel: (312) 792-3502</li>
            
            <a
              href="mailto: contact@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              Email: enq@littlelemon.com
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
      </div>
    </footer>
  );
};
export default Footer;
