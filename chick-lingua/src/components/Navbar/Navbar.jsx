import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Chick-Lingua</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Resources</li>
        <li className='nav-contact'>Quiz</li>
      </ul>
    </div>
  )
}

export default Navbar
