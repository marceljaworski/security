import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/auth/register">Register</Link></li>
          <li><Link to="/auth/login">Log in</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
