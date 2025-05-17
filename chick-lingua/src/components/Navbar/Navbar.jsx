import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
  <div className='nav'>
    <div className="nav-logo">Chick-Lingua</div>
    <ul className="nav-menu">
      <li>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
      </li>
      <li>
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
      </li>
      <li>
        <Link to="/resources" style={{ color: 'inherit', textDecoration: 'none' }}>Resources</Link>
      </li>
      <li className='nav-contact'>
      <Link to="/quiz" style={{ color: 'inherit', textDecoration: 'none' }}>Quiz</Link>
      </li>
    </ul>
  </div>
);

export default Navbar
