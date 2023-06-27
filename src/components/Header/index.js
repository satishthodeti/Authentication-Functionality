import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header">
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
