import { Link } from "react-router-dom";
import { DEFAULT_USERNAME } from "src/utils/constant";

const Header = () => {
  return (
    <div>
      <h3>Welcome, {DEFAULT_USERNAME}</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>

        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;







