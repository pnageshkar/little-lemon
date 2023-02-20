import '../App.css'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className="active" href="./">Home</a>
        </li>
        <li>
          <a href="./">About</a>
        </li>
        <li>
          <a href="./">Menu</a>
        </li>
        <li>
          <a href="./">Reservations</a>
        </li>
        <li>
          <a href="./">Order</a>
        </li>
        <li>
          <a href="./">Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
