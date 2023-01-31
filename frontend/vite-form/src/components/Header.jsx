import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/user/register">Register</Link></li>
          <li><Link to="/user/login">Log in</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
