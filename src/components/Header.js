import '../App.css';
// import 'font-awesome/css/font-awesome.min.css';
import Logo from '../assets/logo.svg';


import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      {/* <h1>Little Lemon</h1> */}
      <div className="logo">
        <img src={Logo} alt="Little Lemon" />
      </div>
      <div id="menu-bar" className="fas fa-hamburger"></div>

      <Navbar />
    </header>
  );
};
export default Header;
