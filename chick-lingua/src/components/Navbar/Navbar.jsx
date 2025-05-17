import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
  <div className='nav'>
    <div className="nav-logo">Chick-Lingua</div>
    <ul className="nav-menu">
      <li>Home</li>
      <li>
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
      </li>
      <li>Resources</li>
      <li className='nav-contact'>Quiz</li>
    </ul>
  </div>
);

export default Navbar
